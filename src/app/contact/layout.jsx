import React from "react";

export const metadata = {
  title: "Contact Radiant ENT Hospital | Get in Touch with ENT Experts in Kannur",
  description: "Contact Radiant ENT Hospital in Kannur for appointments, consultations, or inquiries about our ENT treatments.",
  keywords: "contact Radiant ENT Hospital, ENT appointment Kannur, ENT doctor contact",
  alternates: {
    canonical: "https://www.radiantenthospital.com/contact",
  },
  openGraph: {
    title: "Contact Radiant ENT Hospital | ENT Experts in Kannur",
    description: "Get in touch with Radiant ENT Hospital Kannur — your trusted ENT specialists.",
    url: "https://www.radiantenthospital.com/contact",
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
    title: "Contact Radiant ENT Hospital Kannur",
    description: "Reach out to Radiant ENT Hospital Kannur for ENT consultation and appointment booking.",
    images: ["https://www.radiantenthospital.com/radiant/logo-hr.png"],
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
