import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Best ENT hospital providing specialist treatments" />
        <meta name="keywords" content="ENT hospital, ear, nose, throat, specialist" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Radiant ENT Hospital | Specialist Treatments" />
        <meta property="og:description" content="Best ENT hospital in Kannur providing specialist treatments" />
        <meta property="og:image" content="image_url" />
        <meta property="og:url" content="your_website_url" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Radiant ENT Hospital - Specialist Treatments</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
