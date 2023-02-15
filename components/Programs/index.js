import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import { ProgramArr } from "../Programs/indexArr";
import { motion } from "framer-motion";

const Program = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.4,
        duration: 0.3,
        ease: [0.9, 0.71, 0.7, 1.01],
      }}
      className={styles.programWrapper}
    >
      <Container>
        <Row>
          <Col>
            <div className={styles.programText}>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                  ease: [0.9, 0.71, 0.7, 1.01],
                }}
                className="text-center"
              >
                Our Programs
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                  ease: [0.9, 0.71, 0.7, 1.01],
                }}
                className="text-center"
              >
                What we offer
              </motion.p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 object-center">
          {ProgramArr.map(({ id, image, schoolType, slug }) => (
            <Col sm={6} key={id}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.7,
                  duration: 0.9,
                  ease: [0.9, 0.71, 0.7, 1.01],
                }}
                className="relative flex justify-center mt-10"
              >
                <Image src="/bgshadow.png" alt="alt" width={210} height={210} />
                <div className="absolute flex justify-center">
                  <Image src={image} alt="creche" width={200} height={200} />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.7,
                  duration: 0.8,
                  ease: [0.9, 0.71, 0.7, 1.01],
                }}
                className={styles.progHeader}
              >
                <p
                  className={`text-center text-xl font-bold mt-5 ${styles.schoolTypeText}`}
                >
                  {schoolType}
                </p>
                <p className="text-bold  lg:w-3/4 m-auto text-center -mt-12 md:w-auto">
                  {slug}
                </p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};
export default Program;
