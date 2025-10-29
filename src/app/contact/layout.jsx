import React from "react";

export default function ContactLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Contact Radiant ENT Hospital | Get in Touch with ENT Experts in Kannur</title>
        <meta
          name="description"
          content="Contact Radiant ENT Hospital in Kannur for appointments, consultations, or inquiries about our ENT treatments."
        />
        <meta
          name="keywords"
          content="contact Radiant ENT Hospital, ENT appointment Kannur, ENT doctor contact"
        />
        <link rel="canonical" href="https://www.radiantenthospital.com/contact" />

        <meta property="og:title" content="Contact Radiant ENT Hospital | ENT Experts in Kannur" />
        <meta
          property="og:description"
          content="Get in touch with Radiant ENT Hospital Kannur — your trusted ENT specialists."
        />
        <meta property="og:url" content="https://www.radiantenthospital.com/contact" />
        <meta property="og:image" content="https://www.radiantenthospital.com/radiant/logo-hr.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Radiant ENT Hospital Kannur" />
        <meta
          name="twitter:description"
          content="Reach out to Radiant ENT Hospital Kannur for ENT consultation and appointment booking."
        />
        <meta name="twitter:image" content="https://www.radiantenthospital.com/radiant/logo-hr.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
