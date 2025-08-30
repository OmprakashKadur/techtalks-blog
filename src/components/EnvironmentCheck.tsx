'use client';

import { useState, useEffect } from 'react';
import { AlertTriangle, ExternalLink } from 'lucide-react';

export function EnvironmentCheck() {
  const [isConfigured, setIsConfigured] = useState<boolean | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const checkEnvironment = () => {
      const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
      const hasKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      setIsConfigured(hasUrl && hasKey);
    };

    checkEnvironment();
  }, []);

  if (isConfigured === null) return null;
  if (isConfigured) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 backdrop-blur-md">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-red-400 mb-2">
              Supabase Not Configured
            </h3>
            <p className="text-xs text-red-300 mb-3">
              Your blog features won&apos;t work without proper configuration.
            </p>
            
            {showDetails && (
              <div className="bg-gray-800/50 rounded-lg p-3 mb-3">
                <h4 className="text-xs font-medium text-gray-300 mb-2">Required Environment Variables:</h4>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-gray-400">URL:</span>
                    <span className="text-red-300 ml-2">
                      {process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ Missing'}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Key:</span>
                    <span className="text-red-300 ml-2">
                      {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing'}
                    </span>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex gap-2">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {showDetails ? 'Hide Details' : 'Show Details'}
              </button>
              <a
                href="/SUPABASE_SETUP.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
              >
                Setup Guide
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
