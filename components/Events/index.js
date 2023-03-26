import styles from "../../styles/Home.module.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import EventData from "./indexData";
import Link from "next/link";
import Image from 'next/image'

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
                date="March, 2023"
                activity="French Language Day"
              />
            </Col>
            <Col sm={4}>
              <EventData day="13" date="March, 2023" activity="Revision" />
            </Col>
            <Col sm={4}>
              <EventData day="21" date="March, 2023" activity="Examination" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Link href="/calender">
              <div className="relative flex justify-center mt-6">
                <button type="submit">
                  <Image
                    src="/buttonBk.png"
                    alt="submit"
                    height={50}
                    width={150}
                  />
                  <div className="absolute top-2">
                    <Image
                      src="/rec6.png"
                      alt="submit"
                      height={50}
                      width={150}
                    />
                    <p className="text-white top-3 left-6 absolute tracking-wide font-bold">
                      Show Events
                    </p>
                  </div>
                </button>
              </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};


export default Events;
