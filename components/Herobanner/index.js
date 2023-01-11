import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
const Herobanner = () => {
  return (
    <div className={` hero is-link is-primary`}>
      <Container className="hero-body">
        <Row>
          <Col sm={6} md={6} lg={6}>
            <div className={styles.heroContent}>
              <p className="title">Admission</p>
              <p className="subtitle">open for 2023 - 2024</p>
              <p className="subtitle">Creche | Pre school | Nursery school | Grade school</p>
            </div>
            <div className={styles.enrolButtonContainer}>
              <div className={styles.buttonBackPosition}>
                <Image src="/buttonBk.png" alt="alt" width={150} height={100} />
              </div>
              <div className={styles.buttonFrontPosition}>
                <Link href="/">
                  <Image src="/rec6.png" alt="alt" width={150} height={100} />{" "}
                </Link>
                <div className={`${styles.buttonText}`}>
                  <p>Enroll Now</p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={6} lg={6}>
            <div className={styles.imageBackground}>
              <Image src="/herogirl.png" alt="bg" width={300} height={300} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Herobanner;
