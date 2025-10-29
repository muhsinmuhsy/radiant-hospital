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
  authors: [{ name: "Radiant ENT Hospital, Kannur" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.radiantenthospital.com",
  },
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
    images: ["https://www.radiantenthospital.com/radiant/logo-hr.png"],
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Kannur",
    "geo.position": "11.8745;75.3704",
    "ICBM": "11.8745, 75.3704",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kanitRegular.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
