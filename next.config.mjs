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
<<<<<<< HEAD
=======
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
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
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
