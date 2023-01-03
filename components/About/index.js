import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

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
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.9,
                ease: [0.9, 0.71, 0.7, 1.01],
              }}
              className={styles.fanboy}
            >
              <Image
                src="https://res.cloudinary.com/ddwkojhaj/image/upload/q_auto,f_auto/v1668638477/casual_hndg5x.png"
                alt="fanboy"
                width={100}
                height={100}
              />
            </motion.div>
          </Col>
          <Col sm={5}>
            <p className={styles.AbtTitle}>About Us</p>
            <div className={styles.abtImgContainer}>
              <Image src="/image.png" alt="alt" width={300} height={300} />
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};
export default About;
