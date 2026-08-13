/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/insights',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/insights/:slug',
        destination: '/case-studies/:slug',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
