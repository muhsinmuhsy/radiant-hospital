import React from "react";

export default function ConsultantsLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Our Consultants | Expert ENT Specialists at Radiant ENT Hospital Kannur</title>
        <meta
          name="description"
          content="Meet our highly qualified ENT consultants at Radiant ENT Hospital, Kannur — providing expert care in ear, nose, and throat treatments."
        />
        <meta
          name="keywords"
          content="ENT consultants Kannur, ENT doctors Kannur, Radiant ENT specialists"
        />
        <link rel="canonical" href="https://www.radiantenthospital.com/consultants" />

        <meta property="og:title" content="Our Consultants | Expert ENT Specialists at Radiant ENT Hospital Kannur" />
        <meta
          property="og:description"
          content="Meet our team of expert ENT consultants at Radiant ENT Hospital Kannur."
        />
        <meta property="og:url" content="https://www.radiantenthospital.com/consultants" />
        <meta property="og:image" content="https://www.radiantenthospital.com/radiant/logo-hr.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Consultants | Radiant ENT Hospital Kannur" />
        <meta
          name="twitter:description"
          content="Meet the expert ENT consultants at Radiant ENT Hospital Kannur."
        />
        <meta name="twitter:image" content="https://www.radiantenthospital.com/radiant/logo-hr.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
