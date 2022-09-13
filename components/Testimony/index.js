import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Parent from "../../public/img/parent.png";
import Bus from "../../public/img/bus.png";
import styles from "../../styles/Home.module.css";
import LeftC from "../../public/img/leftC.png";
import RightC from "../../public/img/rightC.png";
import Right from "../../public/img/right.png";
import Left from "../../public/img/left.png";
import { useState } from "react";

const Testimony = () => {
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(0);

  const goToNext = () => {
    setNext((prev) => prev + 1);
  };
  const Previous = () => {
    setPrev((prev) => prev - 1);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <div className="mt-3 -mb-6 scale-50 flex justify-end">
              <Image src={Bus} alt="Bus" />
            </div>
          </Col>
        </Row>
        <Row className={styles.testBg}>
          <Col sm={4}>
            <div className={styles.parentImg}>
              <Image src={Parent} alt="parent" />
            </div>
          </Col>
          <Col sm={2}>
            <div className="text-center mt-2 text-3xl text-white">
              <p className="no-wrap">
                Parents <br />
                Testimonials
              </p>
            </div>
            <div className="scale-50 flex justify-center space-x-10">
              <button onClick={Previous}>
                <a className="flex">
                  <Image src={LeftC} alt="leftCaret" />
                  <div className="absolute mt-1 mr-5 scale-70">
                    <Image src={Left} alt="right" />
                  </div>
                </a>
              </button>
              <button onClick={goToNext}>
                <a className="flex cursor-pointer">
                  <Image src={RightC} alt="rightCaret" />
                  <div className="absolute flex justify-center mt-3 ml-4 scale-150">
                    <Image src={Right} alt="right" />
                  </div>
                </a>
              </button>
            </div>
          </Col>
          <Col sm={6}>
            <div className="textSlider">
              <p className="text-black">
                “Natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Pulvinar sed, hendrerit ac neque. Nunc nulla
                dolor, semper. Ivinar sed, hendrerit ac neque. Nunc nulla dolor,
                semper.”
              </p>
            </div>
            <div className="textSlider">
              <p className="text-white">
                “Natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Pulvinar sed, hendrerit ac neque. Nunc nulla
                dolor, semper. Ivinar sed, hendrerit ac neque. Nunc nulla dolor,
                semper.”
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Testimony;
