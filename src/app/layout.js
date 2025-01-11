import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const gilroyBold = localFont({
  src: "./fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold",
  fallback: ['Arial', 'sans-serif'],
});

const gilroyHeavy = localFont({
  src: "./fonts/Gilroy-Heavy.ttf",
  variable: "--font-gilroy-heavy",
  fallback: ['Arial', 'sans-serif'],
});

const gilroyLight = localFont({
  src: "./fonts/Gilroy-Light.ttf",
  variable: "--font-gilroy-light",
  fallback: ['Arial', 'sans-serif'],
});

const gilroyMedium = localFont({
  src: "./fonts/Gilroy-Medium.ttf",
  variable: "--font-gilroy-medium",
  fallback: ['Arial', 'sans-serif'],
});

const gilroyRegular = localFont({
  src: "./fonts/Gilroy-Regular.ttf",
  variable: "--font-gilroy-regular",
  fallback: ["Arial", "sans-serif"],
});




export const metadata = {
  title: "Radiant ENT Hospital",
  description: "We Provide affordable, accessible and qualityhealthcare for all",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gilroyMedium.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
