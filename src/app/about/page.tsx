'use client';

import { Calendar, Code, Rocket, Globe, Zap, BookOpen, ArrowRight, Clock } from 'lucide-react';
import { useBlogs } from '@/hooks/useBlogs';
import Link from 'next/link';

const journeyMilestones = [
  {
    year: '2022',
    title: 'The Beginning',
    description: 'Started as a curious beginner, fascinated by the endless possibilities of technology. First lines of code written in HTML and CSS.',
    icon: Code,
    color: 'blue'
  },
  {
    year: '2023',
    title: 'Frontend Discovery',
    description: 'Dived deep into JavaScript and React. Built first interactive web applications and discovered the joy of creating user experiences.',
    icon: Rocket,
    color: 'purple'
  },

  {
    year: '2024',
    title: 'AI & Emerging Tech',
    description: 'Began exploring artificial intelligence, machine learning, and cutting-edge technologies. Started integrating AI into applications.',
    icon: Zap,
    color: 'pink'
  },
  {
    year: '2025',
    title: 'Tech Explorer',
    description: 'Now exploring the frontiers of technology - Web3, AR/VR, quantum computing, and beyond. Sharing knowledge through this blog.',
    icon: Globe,
    color: 'orange'
  }
];

const skills = [
  { name: 'React & Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
  { name: 'TypeScript', level: 90, color: 'from-blue-600 to-indigo-600' },
  { name: 'Node.js & Backend', level: 85, color: 'from-green-500 to-emerald-500' },
  // { name: 'AI & Machine Learning', level: 75, color: 'from-purple-500 to-pink-500' },
//   { name: 'Cloud & DevOps', level: 80, color: 'from-cyan-500 to-blue-500' },
//   { name: 'Web3 & Blockchain', level: 70, color: 'from-orange-500 to-yellow-500' }
];

export default function AboutPage() {
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
            <span className="gradient-text">About Omee</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A curious mind exploring the frontiers of technology, one line of code at a time.
          </p>
          <div className="text-lg text-cyan-400 font-mono">
            Decode. Build. Evolve.
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          {/* Story Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
                The Story
              </h2>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Hello! I&apos;m Omee, a passionate technologist and lifelong learner who believes that technology has the power to transform our world for the better. My journey began with simple curiosity about how websites worked, and it has evolved into a deep exploration of emerging technologies that are shaping our future.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I believe in the power of sharing knowledge and building communities around technology. This blog is my way of contributing to the global conversation about where technology is heading and how we can harness it to solve real-world problems.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  When I&apos;m not coding or exploring new technologies, you can find me experimenting with AI tools, contributing to open-source projects, or mentoring other developers who are just starting their journey.
                </p>
              </div>
            </div>
          </section>

          {/* Journey Timeline */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-16 gradient-text">
              My Journey
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500" />
                
                {/* Milestones */}
                <div className="space-y-12">
                  {journeyMilestones.map((milestone) => {
                    const Icon = milestone.icon;
                    return (
                      <div key={milestone.year} className="relative group">
                        {/* Timeline Dot */}
                        <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-black shadow-lg group-hover:scale-125 transition-transform duration-300" />
                        
                        {/* Content */}
                        <div className="ml-16">
                          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-gray-800/50">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="text-4xl">{milestone.year}</div>
                              <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                  {milestone.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                  {milestone.description}
                                </p>
                              </div>
                              <div className="text-4xl text-cyan-400">
                                <Icon />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-16 gradient-text">
              Skills & Expertise
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                      <span className="text-cyan-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Recent Blog Posts */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-16 gradient-text">
              Recent Articles
            </h2>
            <div className="max-w-6xl mx-auto">
              <RecentBlogPosts />
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 gradient-text">
                My Philosophy
              </h2>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  &ldquo;Technology should serve humanity, not the other way around. Every line of code we write, every system we build, should make the world a little better, a little more connected, and a little more accessible.&rdquo;
                </p>
                <div className="text-cyan-400 font-mono text-lg">
                  — Omee
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
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

function RecentBlogPosts() {
  const { posts, loading, error } = useBlogs({ published: true, limit: 3 });

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="w-8 h-8 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-400">Loading recent articles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">Unable to load recent articles</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
        <p className="text-gray-400">No articles published yet</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.map((post) => (
        <article
          key={post.id}
          className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
        >
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm font-mono rounded-full border border-cyan-400/30">
                {post.category}
              </span>
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
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
            >
              Read More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
