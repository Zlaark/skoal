import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize package imports to reduce bundle size
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable React strict mode for better performance patterns
  reactStrictMode: true,

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
