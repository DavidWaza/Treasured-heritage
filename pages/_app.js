import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Herobanner/Header/nav";
import Footer from "../components/Footer";
import ScrollTo from "../components/Scroll";
import 'animate.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <ScrollTo />
      <Footer />
    </>
  );
}

export default MyApp;
