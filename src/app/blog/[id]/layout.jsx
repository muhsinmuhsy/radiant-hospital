export const metadata = {
  title: "Blog Detail | Radiant ENT Hospital Kannur",
  description: "Read expert ENT blogs and health insights from Radiant ENT Hospital Kannur.",
  alternates: {
    canonical: "https://www.radiantenthospital.com/blog",
  },
  openGraph: {
    title: "Blog Detail | Radiant ENT Hospital Kannur",
    description: "Read expert ENT blogs and health insights from Radiant ENT Hospital Kannur.",
    url: "https://www.radiantenthospital.com/blog",
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
    title: "Blog Detail | Radiant ENT Hospital Kannur",
    description: "Read expert ENT blogs and health insights from Radiant ENT Hospital Kannur.",
    images: ["https://www.radiantenthospital.com/radiant/logo-hr.png"],
  },
};

export default function BlogDetailLayout({ children }) {
  return <>{children}</>;
}
