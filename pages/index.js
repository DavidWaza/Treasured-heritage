import styles from "../styles/Home.module.css"
import About from "../components/About";
import Herobanner from "../components/Herobanner";
import Program from "../components/Programs";
import Welcome from "../components/Welcome";
import ContactPage from "../components/Contact";
import Newsletter from "../components/Newsletter";
import { Notice } from "../components/Notice";
import Testimonial from "../components/Testimonial";
import Events from "../components/Events";

export default function Home() {
  return (
    <>
      <div className={styles.homeBody}>
        <Herobanner />
        <Notice />
        <Welcome />
        <About />
        <Program />
        <Events />
        <Testimonial /> 
        <ContactPage />
        <Newsletter />
      </div>
    </>
  );
}
