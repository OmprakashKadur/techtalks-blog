'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Calendar, Clock, Tag, ArrowLeft, Search } from 'lucide-react';

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

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCategoryPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Decode the URL slug (e.g., "react-nextjs" -> "React & Next.js")
        const categorySlug = decodeURIComponent(params.slug as string);
        
        // Map URL slugs to actual category names
        const categoryMap: { [key: string]: string } = {
          'react-nextjs': 'React & Next.js',
          'artificial-intelligence': 'Artificial Intelligence',
          'cloud-devops': 'Cloud & DevOps',
          'emerging-tech': 'Emerging Tech',
          'developer-tools': 'Developer Tools'
        };

        const categoryName = categoryMap[categorySlug] || categorySlug;

        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('category', categoryName)
          .eq('published', true)
          .order('created_at', { ascending: false });

        if (error) {
          throw error;
        }

        setPosts(data || []);
      } catch (err: any) {
        console.error('Error fetching category posts:', err);
        setError(err.message || 'Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchCategoryPosts();
    }
  }, [params.slug]);

  const filteredPosts = posts.filter(post => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
           post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  const getCategoryDisplayName = (slug: string) => {
    const categoryMap: { [key: string]: string } = {
      'react-nextjs': 'React & Next.js',
      'artificial-intelligence': 'Artificial Intelligence',
      'cloud-devops': 'Cloud & DevOps',
      'emerging-tech': 'Emerging Tech',
      'developer-tools': 'Developer Tools'
    };
    return categoryMap[slug] || slug;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading category posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-2xl font-bold text-white mb-4">Error Loading Posts</h1>
          <p className="text-gray-400 mb-6">{error}</p>
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

          {/* Category Header */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">
                {getCategoryDisplayName(params.slug as string)}
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore articles and insights about {getCategoryDisplayName(params.slug as string).toLowerCase()}
            </p>
            <div className="text-lg text-cyan-400 font-mono">
              {posts.length} article{posts.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search within this category..."
                className="w-full pl-12 pr-4 py-4 bg-gray-900/80 border-2 border-cyan-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm font-mono rounded-full border border-cyan-400/30">
                          {post.category}
                        </span>
                        {post.featured && (
                          <span className="px-3 py-1 bg-green-400/10 text-green-400 text-sm font-mono rounded-full border border-green-400/30">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.created_at).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {Math.ceil(post.content.split(' ').length / 200)} min read
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">
                {searchQuery 
                  ? 'No articles found matching your search in this category'
                  : 'No articles found in this category yet'
                }
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
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
