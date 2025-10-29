import React from "react";

export default function ServiceLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>ENT Services | Radiant ENT Hospital Kannur</title>
        <meta
          name="description"
          content="Explore a wide range of ENT services at Radiant ENT Hospital Kannur, including treatments for ear, nose, and throat disorders."
        />
        <meta
          name="keywords"
          content="ENT services Kannur, ear nose throat treatments, Radiant ENT services"
        />
        <link rel="canonical" href="https://www.radiantenthospital.com/service" />

        <meta property="og:title" content="ENT Services | Radiant ENT Hospital Kannur" />
        <meta
          property="og:description"
          content="Comprehensive ENT services for ear, nose, and throat care in Kannur."
        />
        <meta property="og:url" content="https://www.radiantenthospital.com/service" />
        <meta property="og:image" content="https://www.radiantenthospital.com/radiant/logo-hr.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ENT Services | Radiant ENT Hospital Kannur" />
        <meta
          name="twitter:description"
          content="Explore Radiant ENT Hospital's full range of ENT care services in Kannur."
        />
        <meta name="twitter:image" content="https://www.radiantenthospital.com/radiant/logo-hr.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
