import '../styles/globals.css'
import Head from 'next/head'
//import favicon from '../public/assets/favicon.ico'


function MyApp({ Component, pageProps }) {
  return <>
    <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon.ico"/>
          
      </Head>
  <Component {...pageProps} />
  </>
}


export default MyApp
