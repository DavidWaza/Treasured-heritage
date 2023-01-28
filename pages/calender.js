import { Container, Row, Col, Table } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { TableHead, TableData } from "../components/DataArr/Data";

const Calender = () => {
  return (
    <>
      <div className={styles.calenderBanner}></div>
      <Container>
        <Row>
          <Col>
            <div className={styles.fullCalender}>
              <h2>School Calender</h2>
            </div>
            <Row>
              <Col sm={6}>
                <button className={styles.calenderLink} type="submit">
                  <Link
                    href="https://drive.google.com/file/d/1RZrx1OXWiPH-ubog4VqORVu0pdf-NWU5/view?usp=share_link"
                    target="/blank"
                    download="THS Calender"
                  >
                    <p className={styles.calLinkdownload}>2023-2024 calender</p>
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
            <Table striped bordered hover>
              <thead>
                <tr>
                  {TableHead.map((x) => (
                    <th key={x.id} className={styles.tableStyles}>
                      {x.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TableData.map((y) => (
                  <tr key={y.id} className={styles.tableStyles}>
                    <td>{y.date}</td>
                    <td>{y.week}</td>
                    <td>{y.activity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Calender;
