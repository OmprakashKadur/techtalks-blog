import { useState, useEffect, useCallback, useMemo } from 'react';
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

export function useBlogs(options: {
  published?: boolean;
  featured?: boolean;
  category?: string;
  limit?: number;
} = {}) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Memoize options to prevent unnecessary re-renders
  const memoizedOptions = useMemo(() => options, [
    options.published,
    options.featured,
    options.category,
    options.limit
  ]);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      let query = supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (memoizedOptions.published !== undefined) {
        query = query.eq('published', memoizedOptions.published);
      }

      if (memoizedOptions.featured !== undefined) {
        query = query.eq('featured', memoizedOptions.featured);
      }

      if (memoizedOptions.category) {
        query = query.eq('category', memoizedOptions.category);
      }

      if (memoizedOptions.limit) {
        query = query.limit(memoizedOptions.limit);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      setPosts(data || []);
    } catch (err: any) {
      console.error('Error fetching posts:', err);
      setError(err.message || 'Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  }, [memoizedOptions]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { posts, loading, error };
}
