import localFont from "next/font/local";
import "./globals.css";

const kanitRegular = localFont({
  src: "/fonts/Kanit-Regular.ttf",
  variable: "--font-kanit-regular",
  fallback: ["Arial", "sans-serif"],
});

export const metadata = {
  title: "Radiant ENT Hospital",
  description: "We Provide affordable, accessible, and quality healthcare for all",
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
