declare module 'next-pwa' {
  import type { NextConfig } from 'next';

  export interface PWAOptions {
    dest?: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    buildExcludes?: Array<string | RegExp>;
    [key: string]: unknown;
  }

  const withPWA: (options?: PWAOptions) => (nextConfig?: NextConfig) => NextConfig;
  export default withPWA;
}


