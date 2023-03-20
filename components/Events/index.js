import styles from "../../styles/Home.module.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import EventData from "./indexData";
import Link from "next/link";

const Events = () => {
  return (
    <>
      <div className={styles.eventWrapper}>
        <div className={styles.eventHeader}>
          <p>Our Events</p>
        </div>
        <Container className="mt-5">
          <Row className="g-5">
            <Col sm={4}>
              <EventData
                day="20"
                month="March, 2023"
                name="French Language Day"
              />
            </Col>
            <Col sm={4}>
              <EventData day="13" month="March, 2023" name="Revision" />
            </Col>
            <Col sm={4}>
              <EventData day="21" month="March, 2023" name="Examination" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Link href="/calender">
                <button className={styles.eventButton}>Show Events</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Events;
