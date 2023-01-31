import "../styles/globals.css";
// import "../styles/fonts.css";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Herobanner/Header/nav";
import Footer from "../components/Footer";
import ScrollTo from "../components/Scroll";
import "animate.css";

const Content = "college, high-school, school, mentossori";
const { Keyword } = "keyword";

function MyApp({ Component, pageProps }) {
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <ScrollTo />
      <Footer />
    </>
  );
}

export default MyApp;
