import localFont from "next/font/local";
import "./globals.css";

const kanitRegular = localFont({
  src: "/fonts/Kanit-Regular.ttf",
  variable: "--font-kanit-regular",
  fallback: ["Arial", "sans-serif"],
});

export const metadata = {
  title: "Best ENT Hospital in Kannur | Radiant ENT Hospital",
  description: "Radiant ENT Hospital in Kannur offers advanced treatments for ear, nose, and throat conditions. Get expert ENT care from the best specialists in Kannur.",
  keywords: "ENT hospital in Kannur, best ENT hospital in Kannur, ENT specialist in Kannur, ENT doctor near me, ENT clinic near Kannur, Radiant ENT Hospital, ear nose throat treatment Kannur",
  openGraph: {
    title: "Best ENT Hospital in Kannur | Radiant ENT Hospital",
    description: "Radiant ENT Hospital in Kannur provides expert treatment for ear, nose, and throat conditions. Book your appointment today.",
    url: "https://www.radiantenthospital.com",
    siteName: "Radiant ENT Hospital",
    images: [
      {
        url: "https://www.radiantenthospital.com/radiant/logo-hr.png", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Radiant ENT Hospital in Kannur",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best ENT Hospital in Kannur | Radiant ENT Hospital",
    description: "Get expert ENT treatment from leading specialists in Kannur. Book an appointment at Radiant ENT Hospital today!",
    images: ["https://www.radiantenthospital.com/radiant/logo-hr.png"], // Replace with actual image URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/png" />

        {/* Canonical URL (Helps SEO Ranking) */}
        <link rel="canonical" href="https://www.radiantenthospital.com" />

        {/* Meta Tags for Search Engines */}
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="ENT hospital in Kannur, best ENT hospital in Kannur, ENT specialist in Kannur, ENT doctor near me, ENT clinic near Kannur, Radiant ENT Hospital, ear nose throat treatment Kannur" />
        <meta name="author" content="Radiant ENT Hospital, Kannur" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kannur" />
        <meta name="geo.position" content="11.8745;75.3704" /> 
        <meta name="ICBM" content="11.8745, 75.3704" />

        {/* Open Graph (OG) Meta Tags for Social Sharing */}
        <meta property="og:title" content="Best ENT Hospital in Kannur | Radiant ENT Hospital" />
        <meta property="og:description" content="Radiant ENT Hospital in Kannur provides expert treatment for ear, nose, and throat conditions. Book your appointment today." />
        <meta property="og:url" content="https://www.radiantenthospital.com" />
        <meta property="og:site_name" content="Radiant ENT Hospital" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.radiantenthospital.com/radiant/logo-hr.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card for Twitter Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best ENT Hospital in Kannur | Radiant ENT Hospital" />
        <meta name="twitter:description" content="Get expert ENT treatment from leading specialists in Kannur. Book an appointment at Radiant ENT Hospital today!" />
        <meta name="twitter:image" content="https://www.radiantenthospital.com/radiant/logo-hr.png" />
      </head>
      <body className={`${kanitRegular.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
