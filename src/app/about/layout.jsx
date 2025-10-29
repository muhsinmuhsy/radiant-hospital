import React from "react";

export default function AboutLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>About Radiant ENT Hospital | Leading ENT Care in Kannur</title>
        <meta
          name="description"
          content="Learn more about Radiant ENT Hospital, Kannur — our mission, expert team, and commitment to providing advanced ENT treatments."
        />
        <meta
          name="keywords"
          content="about Radiant ENT Hospital Kannur, ENT specialists Kannur, ENT doctors, Radiant ENT team"
        />
        <link rel="canonical" href="https://www.radiantenthospital.com/about" />

        {/* Open Graph */}
        <meta property="og:title" content="About Radiant ENT Hospital | Leading ENT Care in Kannur" />
        <meta
          property="og:description"
          content="Discover the story and expertise behind Radiant ENT Hospital in Kannur — your trusted partner for ENT care."
        />
        <meta property="og:url" content="https://www.radiantenthospital.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.radiantenthospital.com/radiant/logo-hr.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Radiant ENT Hospital | Leading ENT Care in Kannur" />
        <meta
          name="twitter:description"
          content="Learn more about Radiant ENT Hospital, Kannur — our mission, expert team, and commitment to ENT excellence."
        />
        <meta name="twitter:image" content="https://www.radiantenthospital.com/radiant/logo-hr.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
