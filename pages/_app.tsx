import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "swiper/css/bundle";
import { Provider } from "next-auth/client";
import { MoralisProvider } from "react-moralis";

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
        <MoralisProvider
          appId={process.env.NEXT_PUBLIC_APP_ID!}
          serverUrl={process.env.NEXT_PUBLIC_SERVER_URL!}
          initializeOnMount={true}
        >
          <Component {...pageProps} />
        </MoralisProvider>
      </Provider>
    </>
  );
}

export default MyApp;
