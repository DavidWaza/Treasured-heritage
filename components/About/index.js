import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.5,
        duration: 0.5,
        ease: [0.9, 0.71, 0.7, 1.01],
      }}
      className={styles.abtWrapper}
    >
      <Container>
        <Row>
          <Col sm={7}>
            <div className={styles.abtHeader}>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: [0.9, 0.71, 0.7, 1.01],
                }}
              >
                Who we are
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: [0.9, 0.71, 0.7, 1.01],
                }}
              >
                Treasured Heritage School (THS) is a Christian Montessori School
                that offers educational services from Creche to Grade levels. We
                are poised to build a total child that is spiritually, morally
                and academically sound, exuding self confidence that can make
                the child compete favourably with his/her contemporaries in any
                part of the world.
              </motion.p>
              <Link href="/about">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.8,
                    ease: [0.9, 0.71, 0.7, 1.01],
                  }}
                  className={styles.learnMore}
                >
                  Learn more
                </motion.p>
              </Link>
            </div>
          </Col>
          <Col sm={5}>
            <p className={styles.AbtTitle}>About Us</p>
            <div className={styles.abtImgContainer}>
              <Image
                src="https://res.cloudinary.com/ddwkojhaj/image/upload/v1675123406/Image_xe4qjt.png"
                alt="alt"
                width={400}
                height={400}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};
export default About;
