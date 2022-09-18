import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Herobanner/Header/nav";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
