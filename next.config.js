/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com", "m.media-amazon.com"], // Added Amazon domain
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
