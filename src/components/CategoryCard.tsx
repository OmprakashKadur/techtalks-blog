'use client';

import { memo, useState, useCallback, useMemo } from 'react';
import Link from 'next/link';

interface Category {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  postCount: number;
  gradient: string;
}

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard = memo(function CategoryCard({ category }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getColorClasses = useCallback((color: string) => {
    switch (color) {
      case 'blue':
        return 'hover:glow-blue border-cyan-400/30 hover:border-cyan-400';
      case 'purple':
        return 'hover:glow-blue border-purple-400/30 hover:border-purple-400';
      case 'green':
        return 'hover:glow-green border-green-400/30 hover:border-green-400';
      case 'pink':
        return 'hover:glow-pink border-pink-400/30 hover:border-pink-400';
      case 'orange':
        return 'hover:glow-orange border-orange-400/30 hover:border-orange-400';
      default:
        return 'hover:glow-blue border-cyan-400/30 hover:border-cyan-400';
    }
  }, []);

  const getGradientClasses = useCallback((gradient: string) => {
    return `bg-gradient-to-br ${gradient}`;
  }, []);

  const colorClasses = useMemo(() => getColorClasses(category.color), [category.color, getColorClasses]);
  const gradientClasses = useMemo(() => getGradientClasses(category.gradient), [category.gradient, getGradientClasses]);

  return (
    <Link href={`/category/${category.id}`}>
      <div
        className={`
          relative group cursor-pointer transition-all duration-500 transform hover:scale-105
          rounded-2xl p-6 border-2 ${colorClasses}
          bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70
          overflow-hidden
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background gradient overlay */}
        <div className={`
          absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
          ${gradientClasses}
        `} />
        
        {/* Icon */}
        <div className="relative z-10 text-6xl mb-4 text-center animate-float">
          {category.icon}
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
            {category.title}
          </h3>
          
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            {category.description}
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-600/50 text-cyan-400 text-sm font-mono">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            {category.postCount} posts
          </div>
        </div>

        {/* Hover effect overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute inset-0 rounded-2xl ${gradientClasses} blur-xl opacity-20`} />
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cyan-400/50 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cyan-400/50 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      </div>
    </Link>
  );
});
