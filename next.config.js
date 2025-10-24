/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',
  
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  
  env: {
    SITE_NAME: 'Kohezyon Yazılım',
    SITE_URL: process.env.NODE_ENV === 'production' ? 'https://kohesoft.com' : 'http://localhost:3000',
  },
};

module.exports = nextConfig;