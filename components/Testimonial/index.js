/* eslint-disable react/no-unescaped-entities */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.6,
          ease: [0.9, 0.71, 0.7, 1.01],
        }}
        className={`text-center ${styles.testimonialWrapper}`}
      >
        <div className={styles.testimonialHeader}>
          <p>Parents Testimonial</p>
          <p>What people are saying about us</p>
        </div>
        <Row>
          <Col sm={6}>
            <div className="md:border-r border-current border-solid">
              <div className={styles.testContainer}>
                <p>
                  It is a school that can build up the future of the child{" "}
                  <br />
                  and also the spiritual life of the child.
                </p>
                <p>OSIFO PAULA</p>
                <p>THS Parents</p>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className={styles.testContainer}>
              <p>Treasure, you are trying seriously, God bless you all.</p>
              <p>Bayo-Famoroti Motunrayo</p>
              <p>THS Parents</p>{" "}
            </div>
          </Col>
        </Row>
      </motion.div>
    </>
  );
};
export default Testimonial;
