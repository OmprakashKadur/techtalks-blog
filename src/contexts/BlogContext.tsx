'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';
import { supabase } from '@/lib/supabase';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author_id: string;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
  published_at: string | null;
}

interface BlogContextType {
  // All published posts
  allPosts: BlogPost[];
  // Latest 5 posts for home page
  latestPosts: BlogPost[];
  // Latest 3 posts for about page
  recentPosts: BlogPost[];
  // Loading states
  loading: boolean;
  error: string | null;
  // Refresh function
  refreshPosts: () => Promise<void>;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export function useBlogContext() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }
  return context;
}

interface BlogProviderProps {
  children: ReactNode;
}

export function BlogProvider({ children }: BlogProviderProps) {
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastFetch, setLastFetch] = useState<number>(0);
  const [isFetching, setIsFetching] = useState(false);

  // Cache duration: 5 minutes
  const CACHE_DURATION = 5 * 60 * 1000;

  const fetchPosts = useCallback(async (forceRefresh = false) => {
    // Prevent multiple simultaneous fetches
    if (isFetching) return;

    // Check if we need to fetch (cache expired or force refresh)
    const now = Date.now();
    if (!forceRefresh && now - lastFetch < CACHE_DURATION && allPosts.length > 0) {
      return;
    }

    try {
      setIsFetching(true);
      setLoading(true);
      setError(null);

      const { data, error: supabaseError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (supabaseError) {
        throw supabaseError;
      }

      setAllPosts(data || []);
      setLastFetch(now);
    } catch (err: unknown) {
      console.error('Error fetching posts:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch posts');
    } finally {
      setLoading(false);
      setIsFetching(false);
    }
  }, [allPosts.length, lastFetch, isFetching, CACHE_DURATION]);

  // Memoized derived data
  const latestPosts = useMemo(() => allPosts.slice(0, 5), [allPosts]);
  const recentPosts = useMemo(() => allPosts.slice(0, 3), [allPosts]);

  // Initial fetch
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Refresh function for manual refresh
  const refreshPosts = useCallback(async () => {
    await fetchPosts(true);
  }, [fetchPosts]);

  const value = useMemo(() => ({
    allPosts,
    latestPosts,
    recentPosts,
    loading,
    error,
    refreshPosts,
  }), [allPosts, latestPosts, recentPosts, loading, error, refreshPosts]);

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
}
