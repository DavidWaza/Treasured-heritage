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
        <Row className=" g-0 mt-5 object-center">
          <Col sm={4}>
            <div className={styles.crecheBanner}>
              <div className={styles.schoolType}>
                <p className="text-white">Creche</p>
                <p className="text-white">
                  {" "}
                  Our Creche is divided into two categories for effective
                  service delivery that will make your baby experience a
                  Minder/Child interaction such that the baby hardly misses the
                  motherly attention.
                </p>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className={styles.nurseryBanner}>
              <div className={styles.schoolType}>
                <p className="text-white">Nursery</p>
                <p className="text-white">
                  {" "}
                  Here in THS, our Nursery class starts from age 4. We offer the
                  Montessori system of education combined with the British,
                  American and Nigerian curriculum.
                </p>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className={styles.gradeBanner}>
              <div className={styles.schoolType}>
                <p className="text-white">Grade</p>
                <p className="text-white">
                  {" "}
                  Our Grades classes 1 to 5. In THS, the terminating class is
                  Grade 5. Like in our Pre-School,we adopt a combination of both
                  the Conventional and the Montessori methods of teaching. The
                  age range for this level is from age 5 to age 11.
                </p>
              </div>
            </div>
          </Col>
        </Row>
    </motion.div>
  );
};
export default Program;
