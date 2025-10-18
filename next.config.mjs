import nextPWA from 'next-pwa';
import runtimeCaching from 'next-pwa/cache.js';


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
};

const withPWA = nextPWA({
  dest: 'public',
  disable: false,
  register: true,
  skipWaiting: true,
  // Use the default runtimeCaching strategy which is robust and includes fallbacks.
  runtimeCaching,
  // Add this to ensure the offline page is precached
  workboxOptions: {
    // This is a list of pages that will be cached on the first visit.
    // The service worker will then serve these pages from the cache when offline.
    // We add the offline page here to make sure it's always available.
    runtimeCaching: [
      ...runtimeCaching,
      {
        urlPattern: '/offline',
        handler: 'CacheFirst',
        options: {
          cacheName: 'offline-page',
          expiration: {
            maxEntries: 1,
          },
        },
      }
    ],
  },
  // Recommended for App Router:
  buildExcludes: [/middleware-manifest\.json$/],
});

export default withPWA(nextConfig);
