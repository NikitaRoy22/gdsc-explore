import Head from 'next/head'
import Header from '../components/header/Header'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>GDSC EXPLORE</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
      <div id="header-section">
        <Header />
      </div>
    </>
   
  )
}
