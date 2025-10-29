import React from "react";

export default function SpecialitiesLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Our Specialities | Radiant ENT Hospital Kannur</title>
        <meta
          name="description"
          content="Radiant ENT Hospital Kannur offers specialized treatments for hearing loss, sinusitis, throat disorders, and more."
        />
        <meta
          name="keywords"
          content="ENT specialities Kannur, hearing loss treatment, sinusitis care, throat disorder treatment"
        />
        <link rel="canonical" href="https://www.radiantenthospital.com/specialities" />

        <meta property="og:title" content="Our Specialities | Radiant ENT Hospital Kannur" />
        <meta
          property="og:description"
          content="Explore specialized ENT treatments at Radiant ENT Hospital Kannur."
        />
        <meta property="og:url" content="https://www.radiantenthospital.com/specialities" />
        <meta property="og:image" content="https://www.radiantenthospital.com/radiant/logo-hr.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Specialities | Radiant ENT Hospital Kannur" />
        <meta
          name="twitter:description"
          content="Discover the ENT specialities at Radiant ENT Hospital Kannur — advanced care for ear, nose, and throat."
        />
        <meta name="twitter:image" content="https://www.radiantenthospital.com/radiant/logo-hr.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
