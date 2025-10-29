import React from "react";

export default function BlogLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>ENT Health Blog | Radiant ENT Hospital Kannur</title>
        <meta
          name="description"
          content="Read expert ENT tips, health advice, and the latest updates from Radiant ENT Hospital Kannur."
        />
        <meta
          name="keywords"
          content="ENT blog Kannur, ENT health tips, Radiant ENT articles"
        />
        <link rel="canonical" href="https://www.radiantenthospital.com/blog" />

        <meta property="og:title" content="ENT Health Blog | Radiant ENT Hospital Kannur" />
        <meta
          property="og:description"
          content="Explore ENT care articles, treatment advice, and updates from Radiant ENT Hospital Kannur."
        />
        <meta property="og:url" content="https://www.radiantenthospital.com/blog" />
        <meta property="og:image" content="https://www.radiantenthospital.com/radiant/logo-hr.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ENT Health Blog | Radiant ENT Hospital Kannur" />
        <meta
          name="twitter:description"
          content="Expert ENT tips and updates from Radiant ENT Hospital Kannur."
        />
        <meta name="twitter:image" content="https://www.radiantenthospital.com/radiant/logo-hr.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
