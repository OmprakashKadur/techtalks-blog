import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, User } from 'lucide-react';

export default function Web3DevelopmentGuidePage() {
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
                  Emerging Tech
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Web3 Development: From Zero to Hero
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Complete guide to building decentralized applications with modern Web3 technologies. Learn about smart contracts, blockchain integration, and building the future of the web.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Omee
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  November 28, 2024
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  20 min read
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['Web3', 'Blockchain', 'Smart Contracts', 'Ethereum'].map((tag) => (
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
                  {['Solidity', 'React', 'Web3.js', 'Hardhat', 'IPFS'].map((tech) => (
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
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Introduction to Web3</h2>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Web3 represents the next evolution of the internet, where users have ownership and control over their data, digital assets, and online identities. Unlike Web2, where centralized platforms control user data, Web3 is built on blockchain technology that ensures transparency, security, and decentralization.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">Key Concepts</h3>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• <strong>Decentralization:</strong> No single entity controls the network</li>
                  <li>• <strong>Trustlessness:</strong> Trust is established through cryptography</li>
                  <li>• <strong>Ownership:</strong> Users own their data and digital assets</li>
                  <li>• <strong>Interoperability:</strong> Different protocols can work together</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4">Smart Contract Development</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They run on blockchain networks and automatically execute when predefined conditions are met.
                </p>

                <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Example Smart Contract</h4>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleToken {
    string public name;
    string public symbol;
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    
    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
        totalSupply = 1000000 * 10**18;
        balanceOf[msg.sender] = totalSupply;
    }
    
    function transfer(address _to, uint256 _value) public returns (bool) {
        require(balanceOf[msg.sender] >= _value, "Insufficient balance");
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
}`}
                  </pre>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">Building a DApp</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Decentralized applications (DApps) are applications that run on blockchain networks. They provide the same functionality as traditional web applications but with the added benefits of blockchain technology.
                </p>

                <h4 className="text-xl font-semibold text-white mb-3">Frontend Integration</h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Use Web3.js or Ethers.js to interact with smart contracts from your React application. These libraries provide a simple interface for connecting to Ethereum networks and calling smart contract functions.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">Deployment and Testing</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Use development frameworks like Hardhat or Truffle to compile, test, and deploy your smart contracts. These tools provide a comprehensive development environment for Ethereum development.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">Security Best Practices</h3>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Always validate inputs and check for edge cases</li>
                  <li>• Use established patterns and avoid complex logic</li>
                  <li>• Test thoroughly on testnets before mainnet deployment</li>
                  <li>• Consider using formal verification tools</li>
                  <li>• Implement proper access controls and permissions</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4">Conclusion</h3>
                <p className="text-gray-300 leading-relaxed">
                  Web3 development opens up exciting possibilities for building decentralized, user-owned applications. While the learning curve can be steep, the potential for innovation and disruption is enormous. Start with simple projects, learn from the community, and gradually build more complex applications.
                </p>
              </div>
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
