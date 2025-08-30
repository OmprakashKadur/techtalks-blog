import { ExternalLink, Github, Code, Zap } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  achievements: string[];
  status: 'completed' | 'in-progress' | 'planned';
}

const projects: Project[] = [
  {
    id: 'ai-chat-platform',
    title: 'AI Chat Platform',
    description: 'Next.js-powered chat application with OpenAI integration',
    longDescription: 'A modern chat platform that leverages artificial intelligence to provide intelligent responses and conversation management. Built with Next.js 15, TypeScript, and OpenAI API.',
    image: '/api/placeholder/600/400',
    techStack: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Vercel'],
    category: 'AI & Web',
    githubUrl: 'https://github.com/omee/ai-chat-platform',
    liveUrl: 'https://ai-chat.omee.dev',
    achievements: [
      'Real-time AI-powered conversations',
      'Context-aware chat history',
      'Responsive design with dark mode',
      'Deployed on Vercel with edge functions'
    ],
    status: 'completed'
  },
  {
    id: 'cloud-architecture-dashboard',
    title: 'Cloud Architecture Dashboard',
    description: 'Real-time monitoring and management for cloud infrastructure',
    longDescription: 'A comprehensive dashboard for monitoring and managing cloud infrastructure across multiple providers. Features real-time metrics, cost optimization, and automated scaling.',
    image: '/api/placeholder/600/400',
    techStack: ['React', 'Node.js', 'AWS SDK', 'Docker', 'Kubernetes'],
    category: 'Cloud & DevOps',
    githubUrl: 'https://github.com/omee/cloud-dashboard',
    achievements: [
      'Multi-cloud provider support',
      'Real-time cost monitoring',
      'Automated scaling policies',
      'Custom alerting system'
    ],
    status: 'completed'
  },
  {
    id: 'web3-nft-marketplace',
    title: 'Web3 NFT Marketplace',
    description: 'Decentralized NFT trading platform on Ethereum',
    longDescription: 'A fully decentralized NFT marketplace built on Ethereum with smart contracts, IPFS storage, and Web3 wallet integration. Features minting, trading, and auction functionality.',
    image: '/api/placeholder/600/400',
    techStack: ['Solidity', 'React', 'Web3.js', 'IPFS', 'Hardhat'],
    category: 'Web3 & Blockchain',
    githubUrl: 'https://github.com/omee/nft-marketplace',
    liveUrl: 'https://nft.omee.dev',
    achievements: [
      'Smart contract security audited',
      'IPFS decentralized storage',
      'MetaMask wallet integration',
      'Gas optimization techniques'
    ],
    status: 'in-progress'
  },
  {
    id: 'performance-monitoring-tool',
    title: 'Performance Monitoring Tool',
    description: 'Real-time performance analytics for web applications',
    longDescription: 'A comprehensive performance monitoring solution that tracks Core Web Vitals, user experience metrics, and provides actionable insights for optimization.',
    image: '/api/placeholder/600/400',
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    category: 'Developer Tools',
    githubUrl: 'https://github.com/omee/performance-monitor',
    achievements: [
      'Core Web Vitals tracking',
      'Real-time alerting system',
      'Performance optimization suggestions',
      'Multi-site monitoring support'
    ],
    status: 'completed'
  },
  {
    id: 'ar-vr-learning-platform',
    title: 'AR/VR Learning Platform',
    description: 'Immersive educational experiences using augmented reality',
    longDescription: 'An innovative learning platform that uses AR/VR technology to create immersive educational experiences. Supports multiple subjects and interactive 3D models.',
    image: '/api/placeholder/600/400',
    techStack: ['Unity', 'C#', 'WebXR', 'Three.js', 'WebGL'],
    category: 'Emerging Tech',
    achievements: [
      'Cross-platform AR/VR support',
      'Interactive 3D learning models',
      'Progress tracking system',
      'Offline content caching'
    ],
    status: 'planned'
  }
];

const getStatusColor = (status: Project['status']) => {
  switch (status) {
    case 'completed':
      return 'text-green-400 bg-green-400/10 border-green-400/30';
    case 'in-progress':
      return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
    case 'planned':
      return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
    default:
      return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
  }
};

const getStatusText = (status: Project['status']) => {
  switch (status) {
    case 'completed':
      return 'Completed';
    case 'in-progress':
      return 'In Progress';
    case 'planned':
      return 'Planned';
    default:
      return 'Unknown';
  }
};

export default function ProjectsPage() {
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
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Exploring technology through hands-on projects and real-world applications
          </p>
          <div className="text-lg text-cyan-400 font-mono">
            From AI to Web3, Cloud to AR/VR
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="w-16 h-16 text-cyan-400/50" />
                  </div>
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                    {getStatusText(project.status)}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wide">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-lg transition-colors duration-200 border border-gray-600/50 hover:border-cyan-400/50"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all duration-200 transform hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Have a Project Idea?
              </h3>
              <p className="text-gray-300 mb-6">
                I&apos;m always interested in collaborating on interesting projects. Let&apos;s build something amazing together!
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="w-5 h-5" />
                Let&apos;s Collaborate
              </a>
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
