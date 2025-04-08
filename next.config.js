/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add permanent redirects from aiteacher.learnrithm.com to app.learnrithm.com
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://app.learnrithm.com/:path*',
        permanent: true, // This sets up a 301 redirect which tells search engines this is permanent
        basePath: false,
      },
      {
        source: '/',
        destination: 'https://app.learnrithm.com/',
        permanent: true,
        basePath: false,
      }
    ];
  },

  // Configure domain-specific redirects
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value: '<https://app.learnrithm.com>; rel="canonical"', // Tells search engines the canonical URL
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;