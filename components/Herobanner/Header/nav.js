import { useState } from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";


const BigNav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className={styles.navigation}>
      <Link href="/" className={styles.brandName}>
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </Link>
      <button
        className={styles.hamburger}
        id="text"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded
            ? `${styles.navigationMenu} ${styles.expanded}`
            : `${styles.navigationMenu}`
        }
      >
        <ul className={styles.shift}>
          <li className="pt-3">
            <Link href="/">Home</Link>
          </li>
          <li className="pt-3">
            <Link href="/about">About THS</Link>
          </li>
          <li className="pt-3">
            <Link href="/gallery">Events Gallery</Link>
          </li>
          <li className="pt-3">
            <Link href="calender">Calender</Link>
          </li>
          <li className="pt-3">
            <Link href="/contact">Contact</Link>
          </li>
          <div className={styles.mobileButton}>
            <Link href="/portal">Portal</Link>
          </div>
          <div className={`relative mr-5 ${styles.desktopButton}`}>
            <div className={` ${styles.buttonBackPosition}`}>
              <Image src="/buttonBk.png" alt="alt" width={150} height={100} />
            </div>
            <div className={styles.buttonFrontPosition}>
              <Link href="/portal">
                <Image src="/rec6.png" alt="alt" width={150} height={100} />{" "}
                <div className={` ml-5 ${styles.buttonText}`}>
                  <p>Portal</p>
                </div>
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default BigNav;
