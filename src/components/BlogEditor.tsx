'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Save, 
  Eye, 
  EyeOff, 
  Upload, 
  X, 
  Plus, 
  Trash2,
  Calendar,
  Tag,
  BookOpen,
  Sparkles
} from 'lucide-react';

// Import the new TipTap-based rich text editor
import { RichTextEditor } from './RichTextEditor';
import { BlogPreviewModal } from './BlogPreviewModal';

interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  featured: boolean;
  published: boolean;
}

const categories = [
  'React & Next.js',
  'Artificial Intelligence',
  'Cloud & DevOps',
  'Emerging Tech',
  'Developer Tools'
];

const defaultTags = [
  'React', 'Next.js', 'TypeScript', 'AI', 'Machine Learning',
  'Cloud', 'AWS', 'Docker', 'Kubernetes', 'Web3', 'Blockchain',
  'Performance', 'Security', 'Testing', 'Architecture'
];

export function BlogEditor({ postId }: { postId?: string }) {
  const router = useRouter();
  const { user } = useAuth();
  const [post, setPost] = useState<BlogPost>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'React & Next.js',
    tags: [],
    featured: false,
    published: false
  });
  
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [newTag, setNewTag] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Load existing post if editing
  useEffect(() => {
    if (postId) {
      loadPost(postId);
    }
  }, [postId]);



  // Generate slug from title
  useEffect(() => {
    if (post.title) {
      const slug = post.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      setPost(prev => ({ ...prev, slug }));
    }
  }, [post.title]);

  const loadPost = async (id: string) => {
    try {
      // Check if Supabase is properly configured
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        throw new Error('Supabase environment variables are not configured. Please check your .env.local file.');
      }

      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      if (data) {
        setPost(data);
      }
    } catch (error: any) {
      setError('Failed to load post: ' + error.message);
    }
  };

  const handleSave = async (publish: boolean = false) => {
    if (!user) {
      setError('You must be logged in to save posts');
      return;
    }

    if (!post.title || !post.content) {
      setError('Title and content are required');
      return;
    }

    setSaving(true);
    setError('');
    setMessage('');

    try {
      // Check if Supabase is properly configured
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        throw new Error('Supabase environment variables are not configured. Please check your .env.local file.');
      }

      const postData = {
        ...post,
        published: publish,
        published_at: publish ? new Date().toISOString() : null,
        updated_at: new Date().toISOString()
      };

      if (postId) {
        // Update existing post
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', postId);

        if (error) throw error;
        setMessage('Post updated successfully!');
      } else {
        // Create new post
        const { error } = await supabase
          .from('blog_posts')
          .insert([{
            ...postData,
            author_id: user.id,
            created_at: new Date().toISOString()
          }]);

        if (error) throw error;
        setMessage('Post created successfully!');
        
        // Redirect to edit page for the new post
        setTimeout(() => {
          router.push('/admin/blog');
        }, 2000);
      }
    } catch (error: any) {
      setError('Failed to save post: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  const addTag = () => {
    if (newTag.trim() && !post.tags.includes(newTag.trim())) {
      setPost(prev => ({ ...prev, tags: [...prev.tags, newTag.trim()] }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setPost(prev => ({ ...prev, tags: prev.tags.filter(tag => tag !== tagToRemove) }));
  };

  const addDefaultTag = (tag: string) => {
    if (!post.tags.includes(tag)) {
      setPost(prev => ({ ...prev, tags: [...prev.tags, tag] }));
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-gray-400">You must be logged in to access the blog editor.</p>
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
      </div>

      {/* Header */}
      <div className="relative z-10 pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                {postId ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h1>
              <p className="text-gray-400">
                Share your knowledge with the tech community
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowPreviewModal(true)}
                className="px-4 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 rounded-lg font-medium hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-all duration-200"
              >
                <Eye className="w-4 h-4" />
                Preview
              </button>
              
              <button
                onClick={() => handleSave(false)}
                disabled={saving}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 transition-colors duration-200"
              >
                <Save className="w-4 h-4 inline mr-2" />
                {saving ? 'Saving...' : 'Save Draft'}
              </button>
              
              <button
                onClick={() => handleSave(true)}
                disabled={saving}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 inline mr-2" />
                {saving ? 'Publishing...' : 'Publish'}
              </button>
            </div>
          </div>

          {/* Messages */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
              {error}
            </div>
          )}

          {message && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
              {message}
            </div>
          )}
        </div>
      </div>

      {/* Editor */}
      <div className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Editor */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                {/* Title */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={post.title}
                    onChange={(e) => setPost(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                    placeholder="Enter your blog post title..."
                  />
                </div>

                {/* Slug */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    value={post.slug}
                    onChange={(e) => setPost(prev => ({ ...prev, slug: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                    placeholder="auto-generated-slug"
                  />
                </div>

                {/* Excerpt */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Excerpt *
                  </label>
                  <textarea
                    value={post.excerpt}
                    onChange={(e) => setPost(prev => ({ ...prev, excerpt: e.target.value }))}
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Brief description of your blog post..."
                  />
                </div>

                {/* Content Editor */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Content *
                  </label>
                  <div className="bg-gray-800/50 border border-gray-600/50 rounded-lg overflow-hidden">
                    <RichTextEditor
                      value={post.content}
                      onChange={(content) => setPost(prev => ({ ...prev, content }))}
                      placeholder="Start writing your blog post..."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Category */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Category
                </h3>
                <select
                  value={post.category}
                  onChange={(e) => setPost(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Tags */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  Tags
                </h3>
                
                {/* Add new tag */}
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTag()}
                    className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200 text-sm"
                    placeholder="Add tag..."
                  />
                  <button
                    onClick={addTag}
                    className="px-3 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-200"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Current tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800/50 text-cyan-400 text-sm rounded-full border border-gray-600/50"
                    >
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>

                {/* Quick add tags */}
                <div>
                  <p className="text-sm text-gray-400 mb-2">Quick add:</p>
                  <div className="flex flex-wrap gap-1">
                    {defaultTags.slice(0, 8).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => addDefaultTag(tag)}
                        disabled={post.tags.includes(tag)}
                        className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded border border-gray-600/50 hover:bg-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Settings */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Settings</h3>
                
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={post.featured}
                      onChange={(e) => setPost(prev => ({ ...prev, featured: e.target.checked }))}
                      className="w-4 h-4 text-cyan-500 bg-gray-800/50 border-gray-600/50 rounded focus:ring-cyan-400 focus:ring-2"
                    />
                    <span className="text-gray-300">Featured Post</span>
                  </label>
                  
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={post.published}
                      onChange={(e) => setPost(prev => ({ ...prev, published: e.target.checked }))}
                      className="w-4 h-4 text-cyan-500 bg-gray-800/50 border-gray-600/50 rounded focus:ring-cyan-400 focus:ring-2"
                    />
                    <span className="text-gray-300">Published</span>
                  </label>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
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

      {/* Full-Screen Preview Modal */}
      <BlogPreviewModal
        isOpen={showPreviewModal}
        onClose={() => setShowPreviewModal(false)}
        post={post}
      />
    </div>
  );
}
