'use client'
import "../styles/globals.css";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Herobanner/Header/nav";
import Footer from "../components/Footer";
import ScrollTo from "../components/Scroll";
import "animate.css";
import Loader from "./loader";
import { useRouter } from "next/router";
import { useEffect, useState   } from "react";

const Content = "college, high-school, school, mentossori";
const { Keyword } = "keyword";

function MyApp({ Component, pageProps }) {
const [loading, setLoading] = useState(false);
const router = useRouter()

useEffect(() => {
  router.events.on("routeChangeStart", () => {
    console.log('loading...')
    setLoading(true);
  });
  router.events.on("routeChangeComplete", () => {
    console.log('loading off!')
    setLoading(false);
  });
}, []);

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" v />
        <title>Treasured heritage school</title>
        <meta name={Keyword} content={Content} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
        />
      </Head>
      <Navbar />
      {loading && <Loader />}
      <Component {...pageProps} />
      <ScrollTo />
      <Footer />
    </>
  );
}

export default MyApp;
