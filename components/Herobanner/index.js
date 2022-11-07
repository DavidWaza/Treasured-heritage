import styles from "../../styles/Home.module.css";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
// import ButtonBack from "../../public/img/buttonBk.png";
import EnrollButton from "../../public/img/rec6.png";
import Boy from "../../public/img/boy.png";
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
import herobannerOne from "../../public/img/event/dad.jpg";
import herobannerTwo from "../../public/img/event/herogal.jpg";
import herobannerThree from "../../public/img/event/dad.jpg";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const admisURL =
  "https://treasuredheritageschool.com/admission-treasured-heritage-school-ekiti/";

const Herobanner = () => {
  
  return (
    <>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={45}
        totalSlides={3}
        isPlaying={5000}
      >
        <Slider>
          <Slide index={0}>
            <div className={styles.herobannerOne}>
              <Row>
                <Col sm={6}>
                  <div className={styles.heroText}>
                    <p>Admission</p>
                    <p>
                      open for <span>2022 - 2023</span>
                    </p>
                    <p>Creche | Nursery | Primary</p>
                  </div>
                  <Link href="/">
                    <div className={`absolute text-white ${styles.buttonText}`}>
                      Enroll Now
                    </div>
                    <button className={styles.enrollButton}>
                      <Image
                        src={EnrollButton}
                        alt="button"
                        width={150}
                        height={150}
                      />
                    </button>
                  </Link>
                </Col>
                <Col sm={6}>
                  <div className={styles.boy}>
                    <Image src={Boy} alt="boy" />
                  </div>
                  <div className={styles.doodleOne}>
                    <Image src={DoodleOne} alt="dod1" />
                  </div>
                  <div className={styles.doodleTwo}>
                    <Image src={DoodleTwo} alt="dod1" />
                  </div>
                  <div className={styles.doodleThree}>
                    <Image src={DoodleThree} alt="dod1" />
                  </div>
                  <div className={styles.doodleFour}>
                    <Image src={DoodleFour} alt="dod1" />
                  </div>
                  <div className={styles.doodleFive}>
                    <Image src={DoodleFive} alt="dod1" />
                  </div>
                  <div className={styles.doodleSix}>
                    <Image src={DoodleSix} alt="dod1" />
                  </div>
                </Col>
              </Row>
            </div>
          </Slide>
          <Slide index={1}>
            <div className={styles.herobannerTwo}></div>
          </Slide>
          {/* <Slide index={2}>
            <div className={styles.herobannerThree}></div>
          </Slide> */}
        </Slider>
      </CarouselProvider>
    </>
  );
};
export default Herobanner;
