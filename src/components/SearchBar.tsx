'use client';

import { useState, useEffect } from 'react';
import { Sparkles, Command } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  tags: string[];
}

const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    title: 'React Hooks Deep Dive: useState vs useReducer',
    category: 'React & Next.js',
    excerpt: 'Understanding when to use useState vs useReducer for state management in React applications...',
    tags: ['React', 'Hooks', 'State Management']
  },
  {
    id: '2',
    title: 'Building AI-Powered Chatbots with Next.js',
    category: 'Artificial Intelligence',
    excerpt: 'Learn how to integrate OpenAI API with Next.js to create intelligent chatbot interfaces...',
    tags: ['AI', 'Next.js', 'OpenAI', 'Chatbots']
  },
  {
    id: '3',
    title: 'Advanced TypeScript Patterns for React',
    category: 'Developer Tools',
    excerpt: 'Master advanced TypeScript patterns to build more robust and maintainable React applications...',
    tags: ['TypeScript', 'React', 'Patterns']
  }
];

const suggestedTopics = [
  'React hooks', 'AI integration', 'Cloud deployment', 'Performance optimization',
  'TypeScript tips', 'Next.js 15', 'AI tools', 'DevOps practices'
];

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (query.length > 2) {
      setIsSearching(true);
      // Simulate AI search delay
      const timer = setTimeout(() => {
        const filtered = mockSearchResults.filter(result =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );
        setResults(filtered);
        setIsSearching(false);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400">
          <Command className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          placeholder="> Search for tech topics..."
          className="w-full pl-12 pr-4 py-4 bg-gray-900/80 border-2 border-cyan-400/30 rounded-xl text-white placeholder-gray-400 font-mono text-lg focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-sm"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          {isSearching ? (
            <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
          ) : (
            <Sparkles className="w-5 h-5 text-cyan-400" />
          )}
        </div>
      </div>

      {/* Search Results */}
      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-md border border-cyan-400/30 rounded-xl overflow-hidden z-50 max-h-96 overflow-y-auto">
          {results.map((result) => (
            <div
              key={result.id}
              className="p-4 hover:bg-gray-800/50 transition-colors duration-200 cursor-pointer border-b border-gray-700/50 last:border-b-0"
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold mb-1 line-clamp-1">
                    {result.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-2 line-clamp-2">
                    {result.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-cyan-400 font-mono">{result.category}</span>
                    <div className="flex gap-1">
                      {result.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Suggested Topics */}
      {showSuggestions && query.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-md border border-cyan-400/30 rounded-xl overflow-hidden z-50">
          <div className="p-4 border-b border-gray-700/50">
            <h4 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Suggested Topics
            </h4>
            <div className="flex flex-wrap gap-2">
              {suggestedTopics.map((topic, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(topic)}
                  className="px-3 py-1 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-full text-sm transition-colors duration-200 border border-gray-600/50 hover:border-cyan-400/50"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* AI Search Indicator */}
      {query.length > 0 && (
        <div className="absolute -bottom-8 left-0 text-xs text-cyan-400/70 font-mono">
          AI-powered search • {results.length} results found
        </div>
      )}
    </div>
  );
}
