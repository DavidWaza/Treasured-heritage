import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import AboutImg from "../../public/img/about.png";
import Image from "next/image";
import Link from "next/link";
import Arrow from "../../public/img/right.png";
import Casual from "../../public/img/casual.png";

const About = () => {
  return (
    <>
      <Container fluid className={styles.abtSection}>
        <Row>
          {/* <Col sm={12}></Col> */}
          <Container>
            <Row>
              <Col sm={8}>
                <div>
                  <p className="mt-12 pl-12 font-bold tracking-wide font-black">
                    Who we are
                  </p>
                  <p className="pl-12 w-9/12">
                    Treasured Heritage School (THS) is a Christian Montessori
                    School that offers educational services from Creche to Grade
                    levels. We are poised to build a total child that is
                    spiritually, morally and academically sound, exuding self
                    confidence that can make the child compete favourably with
                    his/her contemporaries in any part of the world.
                  </p>
                  <div className="pl-12">
                    <button className="flex cursor-pointer">
                      <Link href="/">
                        <a className="text-black no-underline">Learn more </a>
                      </Link>
                      <Image src={Arrow} alt="arrow" />
                    </button>
                  </div>
                </div>
              </Col>
              <Col sm={4}>
                <h3 className="flex justify-center mb-4">About Us</h3>
                <div className="pr-12">
                  <Image src={AboutImg} alt="aboutimg" />
                </div>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row>
          <Col sm={12}>
            <div className="scale-75">
              <Image src={Casual} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default About;
