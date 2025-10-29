import React from "react";

export const metadata = {
  title: "About Radiant ENT Hospital | Leading ENT Care in Kannur",
  description: "Learn more about Radiant ENT Hospital, Kannur — our mission, expert team, and commitment to providing advanced ENT treatments.",
  keywords: "about Radiant ENT Hospital Kannur, ENT specialists Kannur, ENT doctors, Radiant ENT team",
  alternates: {
    canonical: "https://www.radiantenthospital.com/about",
  },
  openGraph: {
    title: "About Radiant ENT Hospital | Leading ENT Care in Kannur",
    description: "Discover the story and expertise behind Radiant ENT Hospital in Kannur — your trusted partner for ENT care.",
    url: "https://www.radiantenthospital.com/about",
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
    title: "About Radiant ENT Hospital | Leading ENT Care in Kannur",
    description: "Learn more about Radiant ENT Hospital, Kannur — our mission, expert team, and commitment to ENT excellence.",
    images: ["https://www.radiantenthospital.com/radiant/logo-hr.png"],
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
