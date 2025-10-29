import React from "react";

export const metadata = {
  title: "Our Specialities | Radiant ENT Hospital Kannur",
  description: "Radiant ENT Hospital Kannur offers specialized treatments for hearing loss, sinusitis, throat disorders, and more.",
  keywords: "ENT specialities Kannur, hearing loss treatment, sinusitis care, throat disorder treatment",
  alternates: {
    canonical: "https://www.radiantenthospital.com/specialities",
  },
  openGraph: {
    title: "Our Specialities | Radiant ENT Hospital Kannur",
    description: "Explore specialized ENT treatments at Radiant ENT Hospital Kannur.",
    url: "https://www.radiantenthospital.com/specialities",
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
    title: "Our Specialities | Radiant ENT Hospital Kannur",
    description: "Discover the ENT specialities at Radiant ENT Hospital Kannur — advanced care for ear, nose, and throat.",
    images: ["https://www.radiantenthospital.com/radiant/logo-hr.png"],
  },
};

export default function SpecialitiesLayout({ children }) {
  return <>{children}</>;
}
