
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Background from "../../public/img/bgimg.png";
import Principal from "../../public/img/Headmis.png";

const Welcome = ({className="animate__animated animate__backInUp"}) => {
  return (
    <>
      <Container className={className}>
        <Row>
          <div className={styles.welcomeHeader}>WELCOME NOTE</div>
          <Col sm={4}>
            <div className="relative flex justify-center">
              <Image src={Background} alt="background" />
              <div className="absolute right-2">
                <Image src={Principal} alt="principal" />
              </div>
            </div>
          </Col>
          <Col sm={8}>
            <div className={styles.welcomeText}>
              <p className="mt-11 font-bold tracking-wide">THS Welcomes you</p>
              <p>
                It is my pleasure to welcome you to our website. We are
                particularly delighted that you have created time to visit this
                site. This site is the official platform for the dissemination
                of information to the general public and to members of the
                Treasured Heritage School community in particular. We have made
                the site very interactive where you can access every information
                on THS, and also express your views about us. It is my sincere
                belief that after this visit, you will have a very positive view
                about us.{" "}
                <p>
                  And we hope this will not be your last. We look forward to
                  hearing from you very soon Yours in the affairs of moulding
                  lives.
                </p>
                <span>
                  <p className={`${styles.psudoName} flex justify-center`}>
                    Martina George - Bominuru(Mrs)
                  </p>
                  <p className={`${styles.position} flex justify-center`}>
                    Proprietress
                  </p>
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Welcome;
