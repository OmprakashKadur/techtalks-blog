'use client';

import { X, ExternalLink, Smartphone, Monitor, Tablet } from 'lucide-react';
import { useState } from 'react';

interface BlogPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    title: string;
    excerpt: string;
    content: string;
    category: string;
    tags: string[];
    featured: boolean;
    published: boolean;
  };
}

type ViewMode = 'desktop' | 'tablet' | 'mobile';

export function BlogPreviewModal({ isOpen, onClose, post }: BlogPreviewModalProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('desktop');

  if (!isOpen) return null;

  const getViewModeStyles = () => {
    switch (viewMode) {
      case 'mobile':
        return 'max-w-sm mx-auto';
      case 'tablet':
        return 'max-w-2xl mx-auto';
      case 'desktop':
      default:
        return 'max-w-4xl mx-auto';
    }
  };

  const getViewModeIcon = () => {
    switch (viewMode) {
      case 'mobile':
        return <Smartphone className="w-4 h-4" />;
      case 'tablet':
        return <Tablet className="w-4 h-4" />;
      case 'desktop':
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-white">Blog Preview</h2>
            
            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg p-1 border border-gray-600/50">
              {(['desktop', 'tablet', 'mobile'] as ViewMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`p-2 rounded transition-all duration-200 ${
                    viewMode === mode
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                  title={`${mode.charAt(0).toUpperCase() + mode.slice(1)} View`}
                >
                  {getViewModeIcon()}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
              title="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Preview Content */}
      <div className="pt-20 pb-8 h-full overflow-y-auto">
        <div className={`${getViewModeStyles()} px-4`}>
          {/* Blog Post Preview */}
          <article className="bg-white text-gray-900 rounded-lg shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-sm font-medium rounded-full border border-cyan-200">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full border border-green-200">
                    Featured
                  </span>
                )}
                {post.published ? (
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full border border-blue-200">
                    Published
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full border border-yellow-200">
                    Draft
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {post.title || 'Your blog post title will appear here...'}
              </h1>
              
              {post.excerpt && (
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              )}

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full border border-gray-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-8">
              {post.content ? (
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-code:text-green-700 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-green-400 prose-blockquote:border-l-cyan-500 prose-blockquote:text-gray-600"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              ) : (
                <div className="text-center py-16">
                  <div className="text-gray-400 text-lg mb-4">
                    Your blog post content will appear here...
                  </div>
                  <p className="text-gray-500">
                    Start writing in the editor to see a live preview
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-8 bg-gray-50 border-t border-gray-200">
              <div className="text-center text-gray-500">
                <p>This is how your blog post will look to readers</p>
                <p className="text-sm mt-2">
                  Preview mode • {viewMode.charAt(0).toUpperCase() + viewMode.slice(1)} view
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Floating particles for visual appeal */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
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
