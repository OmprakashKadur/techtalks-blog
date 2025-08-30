'use client';

import { memo } from 'react';
import Link from 'next/link';
import { useBlogs } from '@/hooks/useBlogs';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags?: string[];
  created_at: string;
}

const BlogPostCard = memo(({ post }: { post: BlogPost }) => (
  <article className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
    {/* Category Badge */}
    <div className="mb-4">
      <span className="inline-block px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs font-mono rounded-full border border-cyan-400/30">
        {post.category}
      </span>
    </div>

    {/* Title */}
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
      {post.title}
    </h3>

    {/* Excerpt */}
    <p className="text-gray-300 text-sm leading-6 mb-4 line-clamp-3">
      {post.excerpt}
    </p>

    {/* Tags */}
    {post.tags && post.tags.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.slice(0, 3).map((tag: string) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full border border-gray-600/50"
          >
            {tag}
          </span>
        ))}
        {post.tags.length > 3 && (
          <span className="px-2 py-1 bg-gray-800/50 text-gray-500 text-xs rounded-full">
            +{post.tags.length - 3}
          </span>
        )}
      </div>
    )}

    {/* Metadata */}
    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
      <div className="flex items-center gap-1">
        <User className="w-3 h-3" />
        <span>Omee</span>
      </div>
      <div className="flex items-center gap-1">
        <Calendar className="w-3 h-3" />
        <span>{new Date(post.created_at).toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric',
          year: 'numeric'
        })}</span>
      </div>
    </div>

    {/* Read More Link */}
    <Link
      href={`/blog/${post.slug}`}
      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:gap-3 transition-all duration-300"
    >
      Read More
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
    </Link>
  </article>
));

BlogPostCard.displayName = 'BlogPostCard';

const LoadingSkeleton = memo(() => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 animate-pulse">
        <div className="h-4 bg-gray-700 rounded mb-3"></div>
        <div className="h-3 bg-gray-700 rounded mb-2"></div>
        <div className="h-3 bg-gray-700 rounded mb-4"></div>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="h-3 bg-gray-700 rounded w-20"></div>
          <div className="h-3 bg-gray-700 rounded w-16"></div>
        </div>
      </div>
    ))}
  </div>
));

LoadingSkeleton.displayName = 'LoadingSkeleton';

export const LatestBlogPosts = memo(function LatestBlogPosts() {
  const { posts, loading, error } = useBlogs({ 
    published: true, 
    limit: 5 
  });

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-400 mb-4">
          <BookOpen className="w-16 h-16 mx-auto" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Unable to Load Posts</h3>
        <p className="text-gray-400">Please try again later</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <BookOpen className="w-16 h-16 mx-auto" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">No Posts Yet</h3>
        <p className="text-gray-400">Check back soon for new content</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Featured Post */}
      {posts.length > 0 && (
        <div className="mb-12">
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 border border-cyan-400/20 rounded-3xl p-8 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-cyan-400/20 text-cyan-400 text-sm font-mono rounded-full border border-cyan-400/40">
                    Featured Article
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                  {posts[0].title}
                </h3>
                <p className="text-lg text-gray-300 leading-7 mb-6">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Omee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>{new Date(posts[0].created_at).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${posts[0].slug}`}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
                >
                  Read Featured Article
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Quick Preview</h4>
                  <p className="text-gray-300 text-sm leading-6">
                    {posts[0].excerpt.length > 200 
                      ? `${posts[0].excerpt.substring(0, 200)}...` 
                      : posts[0].excerpt
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Latest Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(1).map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>

      {/* View All Posts Button */}
      <div className="text-center pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
        >
          <BookOpen className="w-5 h-5" />
          View All Articles
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
});
