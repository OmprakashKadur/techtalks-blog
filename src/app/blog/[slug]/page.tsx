'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, Tag, ArrowLeft, Share2, Bookmark, User } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
  techStack: string[];
}

const blogPosts: BlogPost[] = [
  {
    slug: 'nextjs-15-features',
    title: 'Next.js 15: What\'s New and Breaking Changes',
    excerpt: 'Explore the latest features, performance improvements, and breaking changes in Next.js 15.',
    content: `
# Next.js 15: What's New and Breaking Changes

Next.js 15 has arrived with significant improvements to performance, developer experience, and the overall ecosystem.

## 🚀 Major Performance Improvements

### Turbopack Stability
Turbopack is now stable and ready for production use, offering:
- 2x faster builds compared to Webpack
- 10x faster updates during development
- Memory efficiency improvements
- Better tree shaking and code splitting

### App Router Enhancements
The App Router has received significant improvements:
- Faster page transitions with optimized navigation
- Improved streaming for better user experience
- Enhanced error boundaries for better error handling

## 🔧 New Features

### Partial Prerendering (Preview)
Next.js 15 introduces Partial Prerendering, which allows you to:
- Prerender static parts of your pages
- Dynamically render interactive components
- Improve Core Web Vitals scores
- Reduce Time to Interactive

## ⚠️ Breaking Changes

### Node.js Version Requirement
- Minimum Node.js version: 18.17.0
- Recommended version: 20.x or later

### App Router Default
- App Router is now the default for new projects
- Pages Router still supported but deprecated
- Migration guide available for existing projects

## 🛠️ Migration Guide

1. Update Dependencies
2. Update Node.js Version
3. Review Middleware
4. Test Performance

## 💡 Best Practices

1. Use Turbopack for development
2. Implement Partial Prerendering where possible
3. Optimize images with the new Image component
4. Monitor performance with built-in analytics
5. Stay updated with the latest features

## 🎯 Conclusion

Next.js 15 represents a significant step forward in the React framework ecosystem. Start your migration today and experience the benefits!
    `,
    category: 'React & Next.js',
    tags: ['Next.js', 'React', 'Performance', 'App Router'],
    date: '2024-12-15',
    readTime: '8 min read',
    author: 'Omee',
    featured: true,
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Turbopack']
  },
  {
    slug: 'ai-react-integration',
    title: 'Building AI-Powered Applications with React',
    excerpt: 'Learn how to integrate AI capabilities into your React applications using modern APIs.',
    content: `
# Building AI-Powered Applications with React

Artificial Intelligence is revolutionizing web development, and React applications are at the forefront of this transformation.

## 🤖 Why AI in React Applications?

### Enhanced User Experience
- Personalized content based on user behavior
- Intelligent search with natural language processing
- Smart recommendations using machine learning
- Automated content generation for dynamic experiences

### Competitive Advantage
- Faster development with AI-powered tools
- Better user engagement through intelligent interactions
- Reduced maintenance with automated processes
- Scalable solutions that grow with your user base

## 🛠️ Setting Up AI Integration

### 1. Choose Your AI Provider
Popular options include:
- OpenAI - GPT models, DALL-E, Whisper
- Google AI - PaLM, Gemini, Vertex AI
- Anthropic - Claude models
- Hugging Face - Open source models

### 2. Install Dependencies
\`\`\`bash
npm install openai @anthropic-ai/sdk @google/generative-ai
\`\`\`

## 🔧 Building AI Components

### Text Generation Component
\`\`\`typescript
export function TextGeneration({ prompt, maxTokens = 100 }) {
  const [generatedText, setGeneratedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateText = async () => {
    setIsLoading(true);
    try {
      const openai = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
      });

      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: maxTokens,
      });

      setGeneratedText(completion.choices[0]?.message?.content || '');
    } catch (error) {
      console.error('Error generating text:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-700/50">
      <button
        onClick={generateText}
        disabled={isLoading}
        className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 disabled:opacity-50"
      >
        {isLoading ? 'Generating...' : 'Generate Text'}
      </button>
      {generatedText && (
        <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-2">Generated Text:</h3>
          <p className="text-gray-300">{generatedText}</p>
        </div>
      )}
    </div>
  );
}
\`\`\`

## 🚀 Advanced AI Patterns

### 1. AI-Powered Search
Implement intelligent search with semantic understanding.

### 2. Content Personalization
Use AI to personalize content based on user behavior.

### 3. Automated Testing
Generate test cases using AI.

## 💡 Conclusion

Integrating AI into React applications opens up a world of possibilities. Start small, experiment with different AI capabilities, and gradually build more sophisticated features.
    `,
    category: 'Artificial Intelligence',
    tags: ['AI', 'React', 'OpenAI', 'Machine Learning'],
    date: '2024-12-10',
    readTime: '12 min read',
    author: 'Omee',
    techStack: ['React', 'OpenAI API', 'TypeScript', 'Next.js']
  },
  {
    slug: 'cloud-architecture-patterns',
    title: 'Advanced Cloud Architecture Patterns',
    excerpt: 'Discover scalable cloud architecture patterns for modern web applications.',
    content: `
# Advanced Cloud Architecture Patterns

Cloud architecture has evolved significantly over the past decade, offering developers powerful patterns for building scalable, resilient, and cost-effective applications.

## ☁️ Why Cloud Architecture Matters

### Scalability Challenges
- Traffic spikes during peak hours
- Geographic distribution of users
- Resource utilization optimization
- Cost management and efficiency

### Business Benefits
- Faster time to market with managed services
- Reduced operational overhead through automation
- Global reach with edge computing
- Pay-as-you-go pricing models

## 🏗️ Core Architecture Patterns

### 1. Microservices Architecture

#### What It Is
Microservices break down monolithic applications into smaller, independent services that communicate through well-defined APIs.

#### Benefits
- Independent deployment and scaling
- Technology diversity for different services
- Fault isolation and resilience
- Team autonomy and faster development

### 2. Serverless Architecture

#### What It Is
Serverless computing abstracts server management, allowing developers to focus on code while the cloud provider handles scaling and infrastructure.

#### Benefits
- Automatic scaling based on demand
- Pay-per-use pricing model
- Reduced operational overhead
- Built-in high availability

### 3. Event-Driven Architecture

#### What It Is
Event-driven architecture uses events to trigger and communicate between decoupled services, enabling loose coupling and scalability.

#### Benefits
- Loose coupling between services
- Asynchronous processing for better performance
- Scalability through event streaming
- Real-time capabilities

## 🚀 Advanced Patterns

### 1. CQRS (Command Query Responsibility Segregation)
- Optimized read performance with denormalized views
- Scalable write operations with command handling
- Flexible data models for different use cases

### 2. Saga Pattern
- Distributed transaction management
- Fault tolerance through compensation
- Scalability without distributed locks

### 3. API Gateway Pattern
- Centralized security and authentication
- Request routing and load balancing
- Rate limiting and throttling

## 💡 Best Practices

### 1. Design Principles
- Single Responsibility: Each service has one clear purpose
- Loose Coupling: Services communicate through well-defined interfaces
- High Cohesion: Related functionality is grouped together
- Fail Fast: Detect and handle failures quickly

### 2. Operational Excellence
- Automated deployments with CI/CD pipelines
- Infrastructure as Code for reproducible environments
- Monitoring and alerting for proactive issue detection

## 🎯 Conclusion

Advanced cloud architecture patterns provide the foundation for building scalable, resilient, and cost-effective applications. Choose patterns that align with your specific requirements and business goals.
    `,
    category: 'Cloud & DevOps',
    tags: ['Cloud', 'Architecture', 'Microservices', 'AWS'],
    date: '2024-12-05',
    readTime: '15 min read',
    author: 'Omee',
    techStack: ['AWS', 'Docker', 'Kubernetes', 'TypeScript']
  }
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.05),transparent_50%)]" />
      </div>

      {/* Navigation */}
      <div className="relative z-10 pt-20 pb-8">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm font-mono rounded-full border border-cyan-400/30">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="px-3 py-1 bg-green-400/10 text-green-400 text-sm font-mono rounded-full border border-green-400/30">
                    Featured
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-600/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
                  Tech Stack Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div 
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-700/50">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-lg transition-colors duration-200 border border-gray-600/50">
                  <Bookmark className="w-4 h-4" />
                  Save
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-lg transition-colors duration-200 border border-gray-600/50">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
              
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                View All Posts
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </article>

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
