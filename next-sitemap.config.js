/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.radiantenthospital.com", // Your domain
    generateRobotsTxt: true, // Generate robots.txt
    sitemapSize: 5000,
    exclude: ["/404", "/admin"], // Exclude unnecessary pages
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
      additionalSitemaps: [
        "https://www.radiantenthospital.com/sitemap-0.xml", // Ensure this exists
      ],
    },
  };
  