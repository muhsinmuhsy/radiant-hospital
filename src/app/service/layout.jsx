import React from "react";

export const metadata = {
  title: "ENT Services | Radiant ENT Hospital Kannur",
  description: "Explore a wide range of ENT services at Radiant ENT Hospital Kannur, including treatments for ear, nose, and throat disorders.",
  keywords: "ENT services Kannur, ear nose throat treatments, Radiant ENT services",
  alternates: {
    canonical: "https://www.radiantenthospital.com/service",
  },
  openGraph: {
    title: "ENT Services | Radiant ENT Hospital Kannur",
    description: "Comprehensive ENT services for ear, nose, and throat care in Kannur.",
    url: "https://www.radiantenthospital.com/service",
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
    title: "ENT Services | Radiant ENT Hospital Kannur",
    description: "Explore Radiant ENT Hospital's full range of ENT care services in Kannur.",
    images: ["https://www.radiantenthospital.com/radiant/logo-hr.png"],
  },
};

export default function ServiceLayout({ children }) {
  return <>{children}</>;
}
