
// import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '../components/About';
import Herobanner from '../components/Herobanner'
import Navbar from '../components/Herobanner/Header/nav'
import Program from '../components/Programs';
import Welcome from '../components/Welcome';
import Testimony from '../components/Testimony';
import ContactPage from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Herobanner />
      <Welcome />
      <About />
      <Program />
      <Testimony />
      <ContactPage />
    </div>
  )
}
