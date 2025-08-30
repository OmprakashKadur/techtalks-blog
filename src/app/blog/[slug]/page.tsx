'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Calendar, Clock, Tag, ArrowLeft, Share2, BookOpen } from 'lucide-react';

interface BlogPost {
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

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', params.slug)
          .eq('published', true)
          .single();

        if (error) {
          if (error.code === 'PGRST116') {
            // No rows returned
            setError('Post not found');
          } else {
            throw error;
          }
        } else {
          setPost(data);
        }
      } catch (err: unknown) {
        console.error('Error fetching post:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch post');
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchPost();
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-6">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,212,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.05),transparent_50%)]" />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>

          {/* Post Header */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm font-mono rounded-full border border-cyan-400/30">
                {post.category}
              </span>
              {post.featured && (
                <span className="px-3 py-1 bg-green-400/10 text-green-400 text-sm font-mono rounded-full border border-green-400/30">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Post Meta */}
            <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.created_at).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {Math.ceil(post.content.split(' ').length / 200)} min read
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Omee
              </div>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-600/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share Button */}
            <button
              onClick={sharePost}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-600/50 text-gray-300 rounded-lg hover:bg-gray-700/50 hover:text-white transition-all duration-200"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Content */}
            <article className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12">
              <div 
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Article Footer */}
            <div className="mt-12 text-center">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Enjoyed this article?
                </h3>
                <p className="text-gray-300 mb-6">
                  Share it with your network and explore more insights on emerging technologies.
                </p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={sharePost}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                  >
                    <Share2 className="w-4 h-4" />
                    Share Article
                  </button>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 border border-gray-600/50 text-gray-300 rounded-lg hover:bg-gray-700/50 hover:text-white transition-all duration-200"
                  >
                    <BookOpen className="w-4 h-4" />
                    More Articles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
