'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface TimelinePost {
  id: string;
  title: string;
  category: string;
  date: string;
  year: number;
  excerpt: string;
  tags: string[];
  readTime: string;
}

const timelinePosts: TimelinePost[] = [
  {
    id: '1',
    title: 'Next.js 15: What\'s New and Breaking Changes',
    category: 'React & Next.js',
    date: '2024-12-15',
    year: 2024,
    excerpt: 'Explore the latest features, performance improvements, and breaking changes in Next.js 15...',
    tags: ['Next.js', 'React', 'Performance'],
    readTime: '8 min read'
  },
  {
    id: '2',
    title: 'Building AI-Powered Applications with React',
    category: 'Artificial Intelligence',
    date: '2024-12-10',
    year: 2024,
    excerpt: 'Learn how to integrate AI capabilities into your React applications using modern APIs...',
    tags: ['AI', 'React', 'Integration'],
    readTime: '12 min read'
  },
  {
    id: '3',
    title: 'Advanced Cloud Architecture Patterns',
    category: 'Cloud & DevOps',
    date: '2024-12-05',
    year: 2024,
    excerpt: 'Discover scalable cloud architecture patterns for modern web applications...',
    tags: ['Cloud', 'Architecture', 'Scalability'],
    readTime: '15 min read'
  },
  {
    id: '4',
    title: 'Web3 Development: From Zero to Hero',
    category: 'Emerging Tech',
    date: '2024-11-28',
    year: 2024,
    excerpt: 'Complete guide to building decentralized applications with modern Web3 technologies...',
    tags: ['Web3', 'Blockchain', 'DApps'],
    readTime: '20 min read'
  },
  {
    id: '5',
    title: 'TypeScript 5.0: Advanced Features Deep Dive',
    category: 'Developer Tools',
    date: '2024-11-20',
    year: 2024,
    excerpt: 'Master the latest TypeScript features and advanced type system concepts...',
    tags: ['TypeScript', 'Advanced', 'Types'],
    readTime: '18 min read'
  },
  {
    id: '6',
    title: 'React Server Components: The Future of React',
    category: 'React & Next.js',
    date: '2024-11-15',
    year: 2024,
    excerpt: 'Understanding React Server Components and their impact on modern web development...',
    tags: ['React', 'Server Components', 'Future'],
    readTime: '14 min read'
  }
];

const years = Array.from(new Set(timelinePosts.map(post => post.year))).sort((a, b) => b - a);

export function TechTimeline() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);

  const postsForYear = timelinePosts.filter(post => post.year === selectedYear);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Year Selector */}
      <div className="flex justify-center mb-12">
        <div className="flex gap-2 p-2 bg-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`
                px-6 py-3 rounded-xl font-semibold transition-all duration-300
                ${selectedYear === year
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }
              `}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400" />
        
        {/* Posts */}
        <div className="space-y-8">
          {postsForYear.map((post) => (
            <div key={post.id} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-black shadow-lg group-hover:scale-125 transition-transform duration-300" />
              
              {/* Post Card */}
              <div className="ml-16">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-gray-800/50 group-hover:shadow-xl group-hover:shadow-cyan-500/10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-gray-800/50 text-cyan-400 text-sm font-mono rounded-full border border-gray-600/50">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/post/${post.id}`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold group-hover:gap-3 transition-all duration-300"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Year Indicator */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900/80 backdrop-blur-md border border-cyan-400/30 rounded-full">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 font-mono">
              {postsForYear.length} posts in {selectedYear}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
