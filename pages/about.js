
import { Col, Container, Row } from "react-bootstrap";
import Abtstyles from "../styles/About.module.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { StaffArr, whyUsArr } from "../components/DataArr/Data";
import AccordionArr from "../components/Accordion/index";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className={Abtstyles.hero}>
        <p className="text-center text-white text-7xl font-bold tracking-wider animate__animated animate__shakeY">
          About Us
        </p>
        <p>
          <q>
            An investment in knowledge pays the best interest. – Benjamin
            Franklin
          </q>
        </p>
      </div>
      <Container>
        <Row>
          <div className={Abtstyles.welcomeSection}>
            <p>Welcome to Treasure Heritage School</p>
            <p>
              It is my pleasure to welcome you to our website. We are
              particularly delighted that you have created time to visit this
              site. This site is the official platform for the dissemination of
              information to the general public and to members of the Treasured
              Heritage School community in particular. We have made the site
              very interactive where you can access every information on THS,
              and also express your views about us. It is my sincere belief that
              after this visit, you will have a very positive view about us.{" "}
            </p>
            <p>
              And we hope this will not be your last. We look forward to hearing
              from you very soon Yours in the affairs of moulding lives.
            </p>
          </div>
        </Row>
        <Row>
          <AccordionArr />
        </Row>
        <Row>
          <Col>
            <div className={Abtstyles.Aheader}>
              <p>Our Mission & Vision</p>
            </div>
          </Col>
          <Row>
            <Col sm={8}>
              <div className={Abtstyles.missionStatement}>
                <p className="mt-10">What we aim to achieve</p>
                <p>
                  <Image
                    src="/rightQuote.png"
                    alt="right quote"
                    width={30}
                    height={30}
                  />
                  <span className="font-bold italic">We</span> provide a sound{" "}
                  <span className="font-bold">Montessori</span> system of
                  education required for the acquisition of relevant knowledge
                  and skills.
                </p>
                <p>
                  {" "}
                  <span className="font-bold italic">Groom</span> children that
                  can compete favourably on a global level.
                </p>
                <p>
                  <span className="font-bold italic">Develop</span> children of
                  faith with godly character
                </p>
                <div className="flex justify-center mt-5">
                  <Image
                    src="/doodleSpiral.svg"
                    alt="spiral"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={Abtstyles.missionStatement}>
                  <p className="flex justify-end mt-5">
                    Where we see ourselves in the near future
                  </p>
                  <div className="flex justify-end">
                    <p>
                      <span className="font-bold italic">To</span> be among the
                      foremost providers of all-round qualitative education in
                      Nigeria. <br />
                      <span className="font-bold italic">A</span> Citadel where
                      leaders with high spiritual, moral and intellectual values
                      are raised.
                      <Image
                        src="/leftQuote.png"
                        alt="left quote"
                        width={30}
                        height={30}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="relative flex justify-center mt-10">
                <Image src="/bgimg.png" alt="background" width={200} height={200}/>
                <div className="absolute -mt-10 left-5">
                  <Image src="/Headmis.png" alt="principal" width={250} height={250}/>
                </div>
              </div>
              <span className="flex justify-center mt-3">
                <p className={styles.psudoName}>
                  Martina George - Bominuru(Mrs)
                </p>
              </span>
              <p className="flex justify-center">Proprietress</p>
            </Col>
          </Row>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <div className="relative">
              <div className={Abtstyles.CBg}>
                <div className={Abtstyles.CBgTitle}>
                  <p className="text-white mt-10 text-3xl font-bold">
                    Why Choose Us?
                  </p>
                </div>
                <div className={Abtstyles.CBgContent}>
                  <p>
                    We are poised to build a total child that is spiritually,
                    morally and academically sound, exuding self confidence that
                    can make the child compete favourably with his/her
                    contemporaries in any part of the world.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <div className={Abtstyles.whyUsContainerDiv}>
            <Row>
              {whyUsArr.map((obj) => (
                <Col sm={4} key={obj.id}>
                  <div className={Abtstyles.whyUsImg}>
                    <Image
                      src={obj.icon}
                      alt="icons-summ"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className={Abtstyles.whyUsTitle}>
                    <p>{obj.field}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Row>
        <Row>
          <div className={Abtstyles.otherLinks}>
            <p>Other Links</p>
          </div>
          <div className={Abtstyles.buttonLinksGrp}>
            <Link href="/event">
              <button className={Abtstyles.buttonLinks}>Events</button>
            </Link>
            <Link href="/admission">
              <button className={Abtstyles.buttonLinks}>Admission</button>
            </Link>
            <Link href="/contact">
              <button className={Abtstyles.buttonLinks}>Contact us</button>
            </Link>
            <Link href="/gallery">
              <button className={Abtstyles.buttonLinks}>Gallery</button>
            </Link>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default About;
