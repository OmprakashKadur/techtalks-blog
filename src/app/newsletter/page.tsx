'use client';

import { useState } from 'react';
import { Mail, CheckCircle, Zap, BookOpen, Users, Bell, ArrowRight, Terminal } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Early Access',
    description: 'Get exclusive access to new articles and tutorials before they\'re published'
  },
  {
    icon: BookOpen,
    title: 'Deep Dives',
    description: 'Receive in-depth analysis of emerging technologies and industry trends'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join a community of like-minded developers and tech enthusiasts'
  },
  {
    icon: Bell,
    title: 'Weekly Updates',
    description: 'Curated weekly digest of the most important tech news and developments'
  }
];

const recentNewsletters = [
  {
    id: '1',
    title: 'The Future of AI in Web Development',
    date: '2024-12-15',
    status: 'sent'
  },
  {
    id: '2',
    title: 'Next.js 15 Performance Deep Dive',
    date: '2024-12-08',
    status: 'sent'
  },
  {
    id: '3',
    title: 'Web3 Development Trends 2024',
    date: '2024-12-01',
    status: 'sent'
  },
  {
    id: '4',
    title: 'Cloud Architecture Best Practices',
    date: '2024-11-24',
    status: 'sent'
  }
];

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    'React & Next.js',
    'Artificial Intelligence',
    'Cloud & DevOps',
    'Emerging Tech',
    'Developer Tools'
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubscribing(false);
    setIsSubscribed(true);
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
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
      <header className="relative z-10 pt-20 pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Newsletter</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay ahead of the curve with weekly insights into emerging technologies
          </p>
          <div className="text-lg text-cyan-400 font-mono">
             Subscribe to Tech Talks with Omee
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Subscription Form */}
              <div className="order-2 lg:order-1">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Terminal className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Console Subscription</h2>
                      <p className="text-gray-400 text-sm">Enter your credentials below</p>
                    </div>
                  </div>

                  {!isSubscribed ? (
                    <form onSubmit={handleSubscribe} className="space-y-6">
                      {/* Email Input */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your.email@example.com"
                            className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border-2 border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 transition-all duration-300"
                            required
                          />
                        </div>
                      </div>

                      {/* Category Selection */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          Select Topics of Interest
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {categories.map((category) => (
                            <button
                              key={category}
                              type="button"
                              onClick={() => toggleCategory(category)}
                              className={`
                                px-3 py-2 text-sm rounded-lg border transition-all duration-200 text-left
                                ${selectedCategories.includes(category)
                                  ? 'bg-cyan-400/20 text-cyan-400 border-cyan-400/50'
                                  : 'bg-gray-800/50 text-gray-300 border-gray-600/50 hover:border-cyan-400/30'
                                }
                              `}
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Subscribe Button */}
                      <button
                        type="submit"
                        disabled={isSubscribing || !email}
                        className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                      >
                        {isSubscribing ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Processing...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            <ArrowRight className="w-4 h-4" />
                            Subscribe to Newsletter
                          </div>
                        )}
                      </button>

                      <p className="text-xs text-gray-400 text-center">
                        By subscribing, you agree to receive weekly emails about technology trends and insights.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Welcome aboard! 🚀</h3>
                      <p className="text-gray-300 mb-4">
                        You&apos;ve successfully subscribed to Tech Talks with Omee.
                      </p>
                      <p className="text-sm text-gray-400">
                        Check your email for a confirmation message and your first newsletter will arrive next week.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits and Info */}
              <div className="order-1 lg:order-2">
                {/* Benefits */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6">What You&apos;ll Get</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => {
                      const Icon = benefit.icon;
                      return (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-1">
                              {benefit.title}
                            </h4>
                            <p className="text-gray-300 text-sm">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Recent Newsletters */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Recent Editions</h3>
                  <div className="space-y-3">
                    {recentNewsletters.map((newsletter) => (
                      <div
                        key={newsletter.id}
                        className="flex items-center justify-between p-4 bg-gray-900/30 rounded-lg border border-gray-700/50"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-medium line-clamp-1">
                            {newsletter.title}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {new Date(newsletter.date).toLocaleDateString('en-US', { 
                              month: 'long', 
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                        <span className="px-2 py-1 bg-green-400/10 text-green-400 text-xs rounded-full border border-green-400/30">
                          {newsletter.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-20 text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">2,500+</div>
                  <div className="text-gray-300">Active Subscribers</div>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-purple-400 mb-2">52</div>
                  <div className="text-gray-300">Newsletters Sent</div>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
                  <div className="text-gray-300">Open Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
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
