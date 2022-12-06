import styles from "../../styles/Home.module.css";
import { Container, Col, Row } from "react-bootstrap";
import Form from "../Form";

const ContactUs = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className={styles.contactBg}>
              <p className="text-white flex justify-center pt-12 text-3xl font-bold">
                Get in touch
              </p>
              <p className="text-center text-white">
                Reach out. We’d love to hear from you
              </p>
              <div>
                <Form />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
