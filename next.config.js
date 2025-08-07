/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['blob.v0.dev'],
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['framer-motion', '@heroicons/react']
  }
}

module.exports = nextConfig
