/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: '*',
          hostname: '**',
          port: '',
          pathname: '/**',
        },
        // {
        //   protocol: 'http',
        //   hostname: '127.0.0.1',
        //   port: '',
        //   pathname: '/**',
        // },
        // {
        //   protocol: 'http',
        //   hostname: 'localhost',
        //   port: '',
        //   pathname: '/**',
        // },
        // {
        //   protocol: 'https',
        //   hostname: 'muhsiiyy.pythonanywhere.com',
        //   port: '',
        //   pathname: '/**',
        // },
      ],
    },
  };
  
  export default nextConfig;
  