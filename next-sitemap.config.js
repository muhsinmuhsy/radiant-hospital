/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.radiantenthospital.com', // Change this to your website URL
    generateRobotsTxt: true, // Generates a robots.txt file
    sitemapSize: 5000, // Default is fine
    exclude: ['/admin', '/dashboard'], // Exclude private pages
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  };
  