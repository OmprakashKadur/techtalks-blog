'use client';

import { useEffect } from 'react';

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface ResourceEntry extends PerformanceEntry {
  initiatorType: string;
  duration: number;
  name: string;
}

interface MemoryInfo {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and when web vitals are available
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
      // Track Core Web Vitals
      const trackWebVitals = () => {
        // LCP (Largest Contentful Paint)
        if ('PerformanceObserver' in window) {
          try {
            const lcpObserver = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              const lastEntry = entries[entries.length - 1];
              if (lastEntry) {
                console.log('LCP:', lastEntry.startTime);
                // Send to analytics service
                // analytics.track('web_vital', { name: 'LCP', value: lastEntry.startTime });
              }
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
          } catch (e) {
            console.warn('LCP tracking failed:', e);
          }

          // FID (First Input Delay)
          try {
            const fidObserver = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              entries.forEach((entry) => {
                const fidEntry = entry as PerformanceEntry & { processingStart: number };
                console.log('FID:', fidEntry.processingStart - entry.startTime);
                // Send to analytics service
                // analytics.track('web_vital', { name: 'FID', value: fidEntry.processingStart - entry.startTime });
              });
            });
            fidObserver.observe({ entryTypes: ['first-input'] });
          } catch (e) {
            console.warn('FID tracking failed:', e);
          }

          // CLS (Cumulative Layout Shift)
          try {
            let clsValue = 0;
            const clsObserver = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              entries.forEach((entry) => {
                const layoutEntry = entry as LayoutShiftEntry;
                if (!layoutEntry.hadRecentInput) {
                  clsValue += layoutEntry.value;
                }
              });
              console.log('CLS:', clsValue);
              // Send to analytics service
              // analytics.track('web_vital', { name: 'CLS', value: clsValue });
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });
          } catch (e) {
            console.warn('CLS tracking failed:', e);
          }
        }

        // Navigation Timing API
        if ('performance' in window) {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            const metrics = {
              dns: navigation.domainLookupEnd - navigation.domainLookupStart,
              tcp: navigation.connectEnd - navigation.connectStart,
              ttfb: navigation.responseStart - navigation.requestStart,
              domLoad: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              windowLoad: navigation.loadEventEnd - navigation.loadEventStart,
              total: navigation.loadEventEnd - navigation.fetchStart,
            };

            console.log('Navigation Metrics:', metrics);
            // Send to analytics service
            // analytics.track('navigation_metrics', metrics);
          }
        }

        // Resource Timing
        if ('PerformanceObserver' in window) {
          try {
            const resourceObserver = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              entries.forEach((entry) => {
                const resourceEntry = entry as ResourceEntry;
                if (resourceEntry.initiatorType === 'img' || resourceEntry.initiatorType === 'script' || resourceEntry.initiatorType === 'css') {
                  console.log(`${resourceEntry.initiatorType} load time:`, resourceEntry.duration);
                  // Track slow resources
                  if (resourceEntry.duration > 1000) {
                    console.warn('Slow resource detected:', resourceEntry.name, resourceEntry.duration);
                  }
                }
              });
            });
            resourceObserver.observe({ entryTypes: ['resource'] });
          } catch (e) {
            console.warn('Resource timing tracking failed:', e);
          }
        }
      };

      // Wait for page load to start tracking
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', trackWebVitals);
      } else {
        trackWebVitals();
      }

      // Track page visibility changes for performance insights
      let hiddenTime = 0;

      const handleVisibilityChange = () => {
        if (document.hidden) {
          hiddenTime = Date.now();
        } else {
          const visibleTime = Date.now() - hiddenTime;
          if (visibleTime > 0) {
            console.log('Page was hidden for:', visibleTime, 'ms');
          }
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);

      // Track memory usage (if available)
      if ('memory' in performance) {
        const memory = (performance as Performance & { memory: MemoryInfo }).memory;
        setInterval(() => {
          const used = Math.round(memory.usedJSHeapSize / 1048576);
          const total = Math.round(memory.totalJSHeapSize / 1048576);
          const limit = Math.round(memory.jsHeapSizeLimit / 1048576);

          if (used > total * 0.8) {
            console.warn('High memory usage:', `${used}MB / ${total}MB (${limit}MB limit)`);
          }
        }, 30000); // Check every 30 seconds
      }

      // Cleanup function
      return () => {
        document.removeEventListener('DOMContentLoaded', trackWebVitals);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }, []);

  // This component doesn't render anything
  return null;
}
