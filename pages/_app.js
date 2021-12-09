import { useEffect } from "react";
import Head from "next/head";

import "public/bootstrap/css/bootstrap.min.css";
import "styles/globals.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("public/bootstrap/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
