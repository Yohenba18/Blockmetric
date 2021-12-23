import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "swiper/css/bundle";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Blockmetric</title>
        <meta name="description" content="Blockmetric" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider
        options={{
          clientMaxAge: 0,
          keepAlive: 0,
        }}
        session={pageProps.session}
      >
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default MyApp;
