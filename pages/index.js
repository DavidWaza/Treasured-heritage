
// import styles from '../styles/Home.module.css'
import About from '../components/About';
import Herobanner from '../components/Herobanner'
import Program from '../components/Programs';
import Welcome from '../components/Welcome';
import Testimony from '../components/Testimony';
import ContactPage from '../components/Contact';


export default function Home() {
  return (
    <div>
      
      <Herobanner />
      <Welcome />
      <About />
      <Program />
      {/* <Testimony /> */}
      <ContactPage />
      
    </div>
  )
}
