import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/img/logo.png";
import ButtonBack from "../../../public/img/buttonBk.png";
import ButtonFront from "../../../public/img/buttonFk.png";
import styles from "../../../styles/Home.module.css";

const Navbar = () => {
  return (
    <>
      <div className="flex fixed z-10 absolute top-2 left-5 w-screen">
        <Image src={Logo} alt="Logo" height={100} width={100} />
        <ul
          className={`${styles.navLink} flex flex-1 justify-center mr-auto text-white text-center absolute top-2 left-60 z-100 `}
        >
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Programs</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Events</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/admission">
              <a>
                <button className={styles.buttonbk}>
                  <Image src={ButtonBack} alt="button" />
                </button>
                <button className={styles.buttonfk}>
                  <Image src={ButtonFront} alt="button" />
                  <span className="absolute top-3 left-10">
                    <p>Admission</p>
                  </span>
                </button>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
