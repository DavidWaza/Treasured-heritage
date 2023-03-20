import styles from "../../styles/Home.module.css";
import { Container, Col, Row } from "react-bootstrap";

const EventData = (props) => {
  return (
    <>
      <div>
        <Container>
          <Row className="g-5">
            <Col sm={6} className={styles.eventDate}>
              <p>{props.day}</p>
              <p>{props.date}</p>
            </Col>
            <Col sm={6} className={styles.eventName}>
              <p>{props.activity}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default EventData;
