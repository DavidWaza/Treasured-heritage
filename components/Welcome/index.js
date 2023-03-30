import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.welcomWrapper}>
        <Container className="p-12">
          <Row>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: [0.9, 0.71, 0.7, 1.01],
              }}
              className={styles.welcomeHeader}
            >
              <p>WELCOME NOTE</p>
            </motion.div>
            <Col sm={6}>
              <div className={`w-1/2 md:w-full m-auto ${styles.headmisImg}`}>
                <Image src="/Headmis.png" alt="head" width={410} height={350} />
              </div>
            </Col>
            <Col sm={6}>
              <div className={` ${styles.welcomeTitle}`}>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.6,
                    ease: [0.9, 0.71, 0.7, 1.01],
                  }}
                >
                  THS Welcomes you
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.7,
                    ease: [0.9, 0.71, 0.7, 1.01],
                  }}
                >
                  It is my pleasure to welcome you to our website. We are
                  particularly delighted that you have created time to visit
                  this site. This site is the official platform for the
                  dissemination of information to the general public and to
                  members of the Treasured Heritage School community in
                  particular. We have made the site very interactive where you
                  can access every information on THS, and also express your
                  views about us. It is my sincere belief that after this visit,
                  you will have a very positive view about us.{" "}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.7,
                    ease: [0.9, 0.71, 0.7, 1.01],
                  }}
                >
                  And we hope this will not be your last. We look forward to
                  hearing from you very soon Yours in the affairs of moulding
                  lives.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    delay: 0.6,
                    duration: 0.8,
                    ease: [0.9, 0.71, 0.7, 1.01],
                  }}
                >
                  Martina George - Bominuru(Mrs)
                </motion.p>
                <hr />
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    delay: 0.6,
                    duration: 0.9,
                    ease: [0.9, 0.71, 0.7, 1.01],
                  }}
                  className={styles.title}
                >
                  Proprietress
                </motion.p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Welcome;
