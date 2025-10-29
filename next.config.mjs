/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: '*',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'muhsiiyy.pythonanywhere.com',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig