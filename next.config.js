/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['localhost', 'bharat-vote.vercel.app'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

module.exports = process.env.NODE_ENV === 'development' ? nextConfig : withPWA(nextConfig);
