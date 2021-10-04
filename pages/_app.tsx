import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "swiper/css/bundle";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Blockmetric</title>
        <meta name="description" content="Blockmetric" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
