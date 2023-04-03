import { Container, Row, Col, Table } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { TableData } from "../components/DataArr/Data";
import EventData from "../components/Events/indexData";

const Calender = () => {
  return (
    <div className={styles.homeBody}>
      <Container>
        <Row>
          <Col>
            <div className={styles.fullCalender}>
              <p>School Calender</p>
            </div>
            <Row>
              <Col sm={6}>
                <button className={styles.calenderLink} type="submit">
                  <Link
                    href="https://drive.google.com/file/d/1RZrx1OXWiPH-ubog4VqORVu0pdf-NWU5/view?usp=share_link"
                    target="/blank"
                    download="THS Calender"
                  >
                    <p className={styles.calLinkdownload}>
                      Download 2023-2024 calender
                    </p>
                  </Link>
                </button>
              </Col>
              <Col sm={6}>
                <button className={styles.newsletterLink}>
                  <Link
                    href="https://drive.google.com/file/d/1PDV_tvzCaoL0ttA7bK-CsmspgwuSh5b9/view?usp=share_link"
                    target="/blank"
                    download="THS Newsletter"
                  >
                    <p className={styles.calLinkdownload}>
                      download Newsletter
                    </p>
                  </Link>
                </button>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className={styles.GTC}>Grace Term Calender (1st term)</p>
              </Col>
            </Row>
            <Row className="g-5">
              {TableData.map((y) => (
                <Col sm={4} key={y.id}>
                  <EventData day={y.day} date={y.date} activity={y.activity} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Calender;
