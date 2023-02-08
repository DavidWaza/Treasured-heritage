import { Col, Container, Row } from "react-bootstrap";
import Abtstyles from "../styles/About.module.css";
import Image from "next/image";
import { whyUsArr } from "../components/DataArr/Data";
import AccordionArr from "../components/Accordion/index";
import { motion } from "framer-motion";
import Link from "next/link";

const easyLink = [
  { href: "/event", links: "Events" },
  { href: "/admission", links: "Admission" },
  { href: "/gallery", links: "Gallery" },
  { href: "/calender", links: "Calender" },
  { href: "/contact", links: "Contact" },
];

const About = () => {
  return (
    <>
      <div className={Abtstyles.homeBody}>
        <div className={Abtstyles.hero}>
          <p className="text-center text-white text-7xl font-bold">About Us</p>
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
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                  ease: [0.9, 0.71, 0.7, 1.01],
                }}
              >
                Welcome to Treasure Heritage School
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 0.6,
                  ease: [0.9, 0.71, 0.7, 1.01],
                }}
              >
                It is my pleasure to welcome you to our website. We are
                particularly delighted that you have created time to visit this
                site. This site is the official platform for the dissemination
                of information to the general public and to members of the
                Treasured Heritage School community in particular. We have made
                the site very interactive where you can access every information
                on THS, and also express your views about us. It is my sincere
                belief that after this visit, you will have a very positive view
                about us.{" "}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  ease: [0.9, 0.71, 0.7, 1.01],
                }}
              >
                And we hope this will not be your last. We look forward to
                hearing from you very soon Yours in the affairs of moulding
                lives.
              </motion.p>
            </div>
          </Row>
          <Row>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.7,
                ease: [0.9, 0.71, 0.7, 1.01],
              }}
              className={Abtstyles.accordionWrapper}
            >
              <AccordionArr />
            </motion.div>
          </Row>
          <Row>
            <Col sm={6} md={6}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                  ease: [0.9, 0.71, 0.7, 1.01],
                }}
                className={Abtstyles.row}
              >
                <p>What we aim to achieve</p>
                <motion.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.8,
                    ease: [0.9, 0.71, 0.7, 1.01],
                  }}
                  className={Abtstyles.listType}
                >
                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      delay: 0.8,
                      duration: 0.8,
                      ease: [0.9, 0.71, 0.7, 1.01],
                    }}
                  >
                    Provide a sound Montessori system of education required for
                    the acquisition of relevant knowledge and skills.
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      delay: 0.8,
                      duration: 0.8,
                      ease: [0.9, 0.71, 0.7, 1.01],
                    }}
                  >
                    Groom children that can compete favorably on a global level
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      delay: 0.8,
                      duration: 0.8,
                      ease: [0.9, 0.71, 0.7, 1.01],
                    }}
                  >
                    Develop children of faith with godly character
                  </motion.li>
                </motion.ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                  ease: [0.9, 0.71, 0.7, 1.01],
                }}
                className={Abtstyles.rowReverseved}
              >
                <p>Where we see ourselves in the near future</p>
                <motion.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.8,
                    ease: [0.9, 0.71, 0.7, 1.01],
                  }}
                  className={Abtstyles.listTypeReverse}
                >
                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      delay: 0.8,
                      duration: 0.8,
                      ease: [0.9, 0.71, 0.7, 1.01],
                    }}
                  >
                    To be among the foremost providers of all-round qualitative
                    education in Nigeria
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      delay: 0.8,
                      duration: 0.8,
                      ease: [0.9, 0.71, 0.7, 1.01],
                    }}
                  >
                    A citadel where leaders with high spiritual, moral and
                    intellectual values are raised
                  </motion.li>
                </motion.ul>
              </motion.div>
            </Col>
            <Col sm={6} md={6}>
              <p className={Abtstyles.mainTitle}>Our Mission & Vision</p>
              <div className={Abtstyles.principalImgShadow}>
                <Image
                  src="/bgimg.png"
                  fill
                  objectPosition="center"
                  objectSize="cover"
                  alt="shadow"
                />
                <div className={Abtstyles.principalImg}>
                  <Image
                    src="/Headmis.png"
                    fill
                    objectPosition="center"
                    objectSize="cover"
                    alt="img"
                  />
                </div>
                <p className={Abtstyles.principalDetails}>
                  Martina George - Bominuru(Mrs)
                </p>
                <p className={Abtstyles.principalPosition}>Propritress</p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                  ease: [0.9, 0.71, 0.7, 1.01],
                }}
                className="relative"
              >
                <div className={Abtstyles.CBg}>
                  <div className={Abtstyles.CBgTitle}>
                    <p className="text-white mt-10 text-3xl font-bold">
                      Why Choose Us?
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      delay: 0.8,
                      duration: 0.8,
                      ease: [0.9, 0.71, 0.7, 1.01],
                    }}
                    className={Abtstyles.CBgContent}
                  >
                    <p>
                      We are poised to build a total child that is spiritually,
                      morally and academically sound, exuding self confidence
                      that can make the child compete favourably with his/her
                      contemporaries in any part of the world.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </Col>
          </Row>
          <Row>
            <div className={Abtstyles.whyUsContainerDiv}>
              <Row>
                {whyUsArr.map((obj) => (
                  <Col sm={4} lg={4} md={4} key={obj.id}>
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
              <p>Popular Links:</p>
            </div>
            <div className={Abtstyles.buttonLinksGrp}>
              {easyLink.map(({ href, links }, index) => {
                return (
                  <div key={index + links}>
                    <Link href={href}>
                      <button className={Abtstyles.buttonLinks}>{links}</button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
