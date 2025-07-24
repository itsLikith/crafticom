import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },

  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: `${process.env.BACKEND_API_URL}/:path*`,
    },
  ],
};

export default nextConfig;
