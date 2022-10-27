
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
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
import { Col, Container, Row } from "react-bootstrap";

const admisURL =
  "https://treasuredheritageschool.com/admission-treasured-heritage-school-ekiti/";

const Herobanner = () => {
  return (
    <>
      <div className={styles.Herobanner}>
        <Container>
          <Row>
            <Col sm={4}>
              <div className={styles.leftContainer}>
                <p className="text-white tracking-wide text-7xl font-bold">
                  Admission
                </p>
                <p className="text-white text-xl font-bold tracking-wide">
                  open for{" "}
                  <span className="text-3xl tracking-wide">2022 - 2023</span>
                </p>
                <p className="text-white">Creche | Nursery | Grade School</p>
              </div>
              <div>
                <Link href={admisURL}>
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
              </div>
            </Col>
            <Col sm={8}>
              <div>
              
                <div className={` animate__animated animate__headShake ${styles.transBoy}`}>
                  <Image src={Boy} alt="boy" />
                </div>
                <div className="absolute top-32 right-60">
                  <Image src={Ball1} alt="ball" />
                </div>

                <div className="absolute top-32 right-40">
                  <Image src={Ball2} alt="ball" />
                </div>
                <div className="absolute top-52 right-60">
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
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Herobanner;
