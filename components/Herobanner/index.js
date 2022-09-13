import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import HerobannerBg from "../../public/img/rec1.png";
import ButtonBack from "../../public/img/buttonBk.png";
import EnrollButton from "../../public/img/rec6.png";
import Boy from "../../public/img/rec16.png";
import Ball1 from "../../public/img/ball1.png";
import Ball2 from "../../public/img/ball2.png";
import Ball3 from "../../public/img/ball3.png";
import Ball4 from "../../public/img/ball4.png";
import DoodleOne from "../../public/img/Doodle.png";
import DoodleTwo from "../../public/img/doodle1.png";
import DoodleThree from "../../public/img/doodle2.png";
import DoodleFour from "../../public/img/doodle4.png";
import DoodleFive from "../../public/img/doodle5.png";
import DoodleSix from "../../public/img/doodle6.png";
import BookBoy from "../../public/img/bookboy.png";

const Herobanner = () => {
  return (
    <>
      <div className="relative truncate">
        <Image src={HerobannerBg} alt="heroImg" height={650} />
        <h1
          className={`${styles.bigText} absolute bottom-80 left-10 text-white text-7xl tracking-widest`}
        >
          Admission
        </h1>
        <h3
          className={`${styles.subText} absolute text-white text-3xl tracking-wide`}
        >
          open for 2022 - 2023
        </h3>
        <p
          className={`${styles.subTextSys} absolute text-white tracking-wider`}
        >
          Creche | Nursery | Grade
        </p>
        <Link href="/admission">
          <a>
            <button className={styles.enrolbuttonbk}>
              <Image src={ButtonBack} alt="button" />
            </button>
            <button className={styles.enrolbuttonfk}>
              <Image src={EnrollButton} alt="button" />
              <span className="absolute top-0 left-10 text-white">
                <p>Enroll</p>
              </span>
            </button>
          </a>
        </Link>
        <div className={styles.transBoy}>
          <Image src={Boy} alt="" />
        </div>
        <div className="absolute top-40 right-60">
          <Image src={Ball1} alt="ball" />
        </div>
        <div className="absolute top-60 right-40">
          <Image src={Ball2} alt="ball" />
        </div>
        <div className="absolute top-60 right-60">
          <Image src={Ball3} alt="ball" />
        </div>
        <div className={styles.ballOne}>
          <Image src={Ball4} alt="ball" />
        </div>
        <div className={styles.ballTwo}>
          <Image src={Ball2} alt="ball" />
        </div>
        <div className={styles.ballThree}>
          <Image src={Ball1} alt="ball" />
        </div>
        <div className={`${styles.doodleOne}`}>
          <Image src={DoodleOne} alt="doodle" />
        </div>
        <div className={`${styles.doodleTwo}`}>
          <Image src={DoodleTwo} alt="doodle" />
        </div>
        <div className={`${styles.doodleThree}`}>
          <Image src={DoodleThree} alt="doodle" />
        </div>
        <div className={`${styles.doodleFour}`}>
          <Image src={DoodleFour} alt="doodle" />
        </div>
        <div className={`${styles.doodleFive}`}>
          <Image src={DoodleFive} alt="doodle" />
        </div>
        <div className={`${styles.doodleSix}`}>
          <Image src={DoodleSix} alt="doodle" />
        </div>
        <div className={`${styles.bookBoy} absolute bottom-0 left-80`}>
          <Image src={BookBoy} alt="readingboy" />
        </div>
      </div>
    </>
  );
};
export default Herobanner;
