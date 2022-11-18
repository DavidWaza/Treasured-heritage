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
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About THS</Link>
          </li>
          <li>
            <Link href="/program">About THS</Link>
          </li>
          <li>
            <Link href="/event">Event</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={styles.portal}>
            <Link href="/portal">
              <p className={styles.portalText}>portal</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BigNav;
