import React from "react";

export const metadata = {
  title: "Our Consultants | Expert ENT Specialists at Radiant ENT Hospital Kannur",
  description: "Meet our highly qualified ENT consultants at Radiant ENT Hospital, Kannur — providing expert care in ear, nose, and throat treatments.",
  keywords: "ENT consultants Kannur, ENT doctors Kannur, Radiant ENT specialists",
  alternates: {
    canonical: "https://www.radiantenthospital.com/consultants",
  },
  openGraph: {
    title: "Our Consultants | Expert ENT Specialists at Radiant ENT Hospital Kannur",
    description: "Meet our team of expert ENT consultants at Radiant ENT Hospital Kannur.",
    url: "https://www.radiantenthospital.com/consultants",
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
    title: "Our Consultants | Radiant ENT Hospital Kannur",
    description: "Meet the expert ENT consultants at Radiant ENT Hospital Kannur.",
    images: ["https://www.radiantenthospital.com/radiant/logo-hr.png"],
  },
};

export default function ConsultantsLayout({ children }) {
  return <>{children}</>;
}
