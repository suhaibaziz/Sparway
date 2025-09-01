/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 's.wordpress.com' }, // mShots
      { protocol: 'https', hostname: 'image.thum.io' },   // thum.io
      { protocol: 'https', hostname: 'www.google.com' },  // favicon fallback
    ],
  },
};

module.exports = nextConfig;
