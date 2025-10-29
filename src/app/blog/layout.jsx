import React from "react";

export const metadata = {
  title: "ENT Health Blog | Radiant ENT Hospital Kannur",
  description: "Read expert ENT tips, health advice, and the latest updates from Radiant ENT Hospital Kannur.",
  keywords: "ENT blog Kannur, ENT health tips, Radiant ENT articles",
  alternates: {
    canonical: "https://www.radiantenthospital.com/blog",
  },
  openGraph: {
    title: "ENT Health Blog | Radiant ENT Hospital Kannur",
    description: "Explore ENT care articles, treatment advice, and updates from Radiant ENT Hospital Kannur.",
    url: "https://www.radiantenthospital.com/blog",
    images: [
      {
        url: "https://www.radiantenthospital.com/radiant/logo-hr.png",
        width: 1200,
        height: 630,
        alt: "Radiant ENT Hospital in Kannur",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ENT Health Blog | Radiant ENT Hospital Kannur",
    description: "Expert ENT tips and updates from Radiant ENT Hospital Kannur.",
    images: ["https://www.radiantenthospital.com/radiant/logo-hr.png"],
  },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
