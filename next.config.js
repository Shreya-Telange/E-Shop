/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com", "m.media-amazon.com"], // Added Amazon domain
  },
};

module.exports = nextConfig;
