export const metadata = {
  title: "Speciality Detail | Radiant ENT Hospital Kannur",
  description: "Explore ENT specialities and treatments at Radiant ENT Hospital Kannur.",
  alternates: {
    canonical: "https://www.radiantenthospital.com/specialities",
  },
  openGraph: {
    title: "Speciality Detail | Radiant ENT Hospital Kannur",
    description: "Explore ENT specialities and treatments at Radiant ENT Hospital Kannur.",
    url: "https://www.radiantenthospital.com/specialities",
    images: [
      {
        url: "https://www.radiantenthospital.com/radiant/logo-hr.png",
        width: 1200,
        height: 630,
        alt: "Radiant ENT Hospital in Kannur",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speciality Detail | Radiant ENT Hospital Kannur",
    description: "Explore ENT specialities and treatments at Radiant ENT Hospital Kannur.",
    images: ["https://www.radiantenthospital.com/radiant/logo-hr.png"],
  },
};

export default function SpecialityDetailLayout({ children }) {
  return <>{children}</>;
}
