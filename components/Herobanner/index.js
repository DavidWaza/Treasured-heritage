import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
const Herobanner = () => {
  return (
    <div className={styles.herobanner}>
      <Container className="hero-body">
        <Row>
          <Col sm={6} md={6} lg={6}>
            <div className={styles.heroContent}>
              <p>Admission</p>
              <p>Open for 2023 - 2024</p>
              <p>Creche | Pre school | Nursery school | Grade school</p>
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
              <Image src="/herogirl.png" alt="bg" width={350} height={350} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Herobanner;
