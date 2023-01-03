import styles from "../../styles/Home.module.css";
import { Container, Col, Row } from "react-bootstrap";
import Form from "../Form";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: [0.9, 0.71, 0.7, 1.01],
              }}
              className={styles.contactBg}
            >
              <p className="text-white flex justify-center pt-12 text-3xl font-bold">
                Get in touch
              </p>
              <p className="text-center text-white">
                Reach out. We’d love to hear from you
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                  ease: [0.9, 0.71, 0.7, 1.01],
                }}
              >
                <Form />
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
