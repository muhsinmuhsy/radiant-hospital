/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/pages/:slug*',
        destination: '/:slug*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
