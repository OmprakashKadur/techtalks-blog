import { ExternalLink, Github, BookOpen, Code, Zap, Database, Cloud, Globe, Bookmark } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  type: 'tool' | 'library' | 'article' | 'video' | 'course';
  tags: string[];
  featured?: boolean;
}

const resources: Resource[] = [
  {
    id: 'nextjs-docs',
    title: 'Next.js Documentation',
    description: 'Official Next.js documentation with comprehensive guides and API references',
    url: 'https://nextjs.org/docs',
    category: 'React & Next.js',
    type: 'article',
    tags: ['Next.js', 'React', 'Documentation'],
    featured: true
  },
  {
    id: 'openai-api',
    title: 'OpenAI API Reference',
    description: 'Complete API documentation for integrating AI capabilities into your applications',
    url: 'https://platform.openai.com/docs',
    category: 'Artificial Intelligence',
    type: 'tool',
    tags: ['AI', 'OpenAI', 'API', 'Machine Learning'],
    featured: true
  },
  {
    id: 'aws-well-architected',
    title: 'AWS Well-Architected Framework',
    description: 'Best practices for building secure, high-performing, resilient cloud infrastructure',
    url: 'https://aws.amazon.com/architecture/well-architected/',
    category: 'Cloud & DevOps',
    type: 'article',
    tags: ['AWS', 'Cloud', 'Architecture', 'Best Practices']
  },
  {
    id: 'typescript-handbook',
    title: 'TypeScript Handbook',
    description: 'Official TypeScript documentation and learning resources',
    url: 'https://www.typescriptlang.org/docs/',
    category: 'Developer Tools',
    type: 'article',
    tags: ['TypeScript', 'Documentation', 'Learning']
  },
  {
    id: 'react-patterns',
    title: 'React Design Patterns',
    description: 'Collection of proven design patterns for building scalable React applications',
    url: 'https://github.com/omee/react-patterns',
    category: 'React & Next.js',
    type: 'library',
    tags: ['React', 'Patterns', 'Best Practices', 'Architecture']
  },
  {
    id: 'ai-tools-collection',
    title: 'AI Tools Collection',
    description: 'Curated collection of AI tools and libraries for developers',
    url: 'https://github.com/omee/ai-tools',
    category: 'Artificial Intelligence',
    type: 'tool',
    tags: ['AI', 'Tools', 'Libraries', 'Development']
  },
  {
    id: 'web3-learning-path',
    title: 'Web3 Learning Path',
    description: 'Comprehensive learning path for Web3 and blockchain development',
    url: 'https://github.com/omee/web3-learning',
    category: 'Emerging Tech',
    type: 'course',
    tags: ['Web3', 'Blockchain', 'Learning', 'Tutorials']
  },
  {
    id: 'performance-optimization',
    title: 'Web Performance Optimization Guide',
    description: 'Complete guide to optimizing web application performance',
    url: 'https://github.com/omee/performance-guide',
    category: 'Developer Tools',
    type: 'article',
    tags: ['Performance', 'Optimization', 'Web', 'Best Practices']
  }
];

const categories = ['All', 'React & Next.js', 'Artificial Intelligence', 'Cloud & DevOps', 'Emerging Tech', 'Developer Tools'];

const getTypeIcon = (type: Resource['type']) => {
  switch (type) {
    case 'tool':
      return <Zap className="w-4 h-4" />;
    case 'library':
      return <Code className="w-4 h-4" />;
    case 'article':
      return <BookOpen className="w-4 h-4" />;
    case 'video':
      return <Globe className="w-4 h-4" />;
    case 'course':
      return <Bookmark className="w-4 h-4" />;
    default:
      return <ExternalLink className="w-4 h-4" />;
  }
};

const getTypeColor = (type: Resource['type']) => {
  switch (type) {
    case 'tool':
      return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
    case 'library':
      return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
    case 'article':
      return 'text-green-400 bg-green-400/10 border-green-400/30';
    case 'video':
      return 'text-purple-400 bg-purple-400/10 border-purple-400/30';
    case 'course':
      return 'text-pink-400 bg-pink-400/10 border-pink-400/30';
    default:
      return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
  }
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,212,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.05),transparent_50%)]" />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-20 pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Curated collection of tools, libraries, and learning resources for modern developers
          </p>
          <div className="text-lg text-cyan-400 font-mono">
            Knowledge is power, tools are amplifiers
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          {/* Featured Resources */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              Featured Resources
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {resources.filter(r => r.featured).map((resource) => (
                  <div
                    key={resource.id}
                    className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                          {getTypeIcon(resource.type)}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm font-mono rounded-full border border-cyan-400/30">
                            {resource.category}
                          </span>
                          <span className={`px-3 py-1 text-sm font-mono rounded-full border ${getTypeColor(resource.type)}`}>
                            {resource.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                          {resource.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {resource.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {resource.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                        >
                          Visit Resource
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* All Resources by Category */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-16 gradient-text">
              All Resources
            </h2>
            <div className="max-w-7xl mx-auto">
              {categories.filter(cat => cat !== 'All').map((category) => {
                const categoryResources = resources.filter(r => r.category === category);
                if (categoryResources.length === 0) return null;
                
                return (
                  <div key={category} className="mb-16">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                      {category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryResources.map((resource) => (
                        <div
                          key={resource.id}
                          className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                              {getTypeIcon(resource.type)}
                            </div>
                            <span className={`px-2 py-1 text-xs font-mono rounded-full border ${getTypeColor(resource.type)}`}>
                              {resource.type}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300 line-clamp-2">
                            {resource.title}
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-3">
                            {resource.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {resource.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                          >
                            Open Resource
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mt-20">
            <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Have a Resource to Share?
              </h3>
              <p className="text-gray-300 mb-6">
                Found an amazing tool or resource? Let me know and I'll add it to the collection!
              </p>
              <a
                href="mailto:omee@techtalks.dev"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Bookmark className="w-5 h-5" />
                Suggest Resource
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Floating particles */}
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
