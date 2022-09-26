import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import { ProgramArr } from "../Programs/indexArr";
import PBackground from "../../public/img/progbg.png";

const Program = () => {
  return (
    <>
      <Container className="p-5">
        <Row>
          <Col>
            <div className={styles.programText}>
              <h2 className="text-center">Our Programs</h2>
              <h5 className="text-center">What we offer</h5>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 object-center">
          {ProgramArr.map(({ id, image, schoolType, slug}) => (
            <Col sm={4} key={id}>
              <div className="relative flex justify-center">
                <Image src={PBackground} alt="background" />
                <div className="absolute right-8">
                  <Image src={image} alt="creche" />
                </div>
              </div>
              <div className={styles.progHeader}>
                <h4 className="text-center mt-3">{schoolType}</h4>
                <p className="text-bold">{slug}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Program;
