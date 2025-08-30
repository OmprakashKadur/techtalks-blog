import { memo } from 'react';
import Link from 'next/link';
import { CategoryCard } from '@/components/CategoryCard';
import { SearchBar } from '@/components/SearchBar';
import { TechTimeline } from '@/components/TechTimeline';
import { LatestBlogPosts } from '@/components/LatestBlogPosts';

const categories = [
  {
    id: 'react-nextjs',
    title: 'React & Next.js',
    icon: '⚛️',
    description: 'Tutorials, deep-dives, performance hacks',
    color: 'blue',
    postCount: 12,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    icon: '🤖',
    description: 'AI tools, ML concepts, LLMs, prompt engineering',
    color: 'purple',
    postCount: 8,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    icon: '☁️',
    description: 'AWS, GCP, CI/CD, scalable apps',
    color: 'green',
    postCount: 15,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'emerging-tech',
    title: 'Emerging Tech',
    icon: '🔮',
    description: 'Web3, AR/VR, Quantum Computing, Edge Tech',
    color: 'pink',
    postCount: 6,
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 'developer-tools',
    title: 'Developer Tools',
    icon: '🛠️',
    description: 'VS Code setups, Git tips, workflows',
    color: 'orange',
    postCount: 10,
    gradient: 'from-orange-500 to-yellow-500'
  }
];

const HomePage = memo(function HomePage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-8 pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">Tech Talks</span>
            <br />
            <span className="text-white">with Omee</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Exploring the Future of Technology through in-depth articles, tutorials, and insights
          </p>
          <div className="text-3xl md:text-4xl font-mono text-cyan-400 mb-8 animate-pulse-glow">
            Decode. Build. Evolve. With Omee.
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Latest Tech Insights</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span>Expert Tutorials</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              <span>AI & Web3 Guides</span>
            </div>
          </div>
          
          {/* AI Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <SearchBar />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          {/* Latest Blog Posts */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold gradient-text mb-4">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Stay updated with the latest insights, tutorials, and deep-dives into cutting-edge technologies
              </p>
            </div>
            <LatestBlogPosts />
          </section>

          {/* Categories Grid */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold gradient-text mb-4">
                Explore Tech Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Dive deep into specific technology domains and discover curated content
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </section>

          {/* Tech Timeline */}
          {/* <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold gradient-text mb-4">
                Tech Evolution Timeline
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Journey through the milestones that shaped modern technology
              </p>
            </div>
            <TechTimeline />
          </section> */}

          {/* Newsletter Signup */}
          <section className="text-center">
            <div className="max-w-4xl mx-auto p-10 rounded-3xl bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  🚀 Stay Ahead of the Tech Curve
                </h3>
                <p className="text-xl text-gray-300 mb-2">
                  Get exclusive insights on emerging technologies, AI breakthroughs, and developer tips
                </p>
                <p className="text-gray-400">
                  Join 1000+ developers staying updated with the latest tech trends
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25">
                  Subscribe Now
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
});

export default HomePage;
