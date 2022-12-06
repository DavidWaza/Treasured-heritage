import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import { ProgramArr } from "../Programs/indexArr";

const Program = () => {
  return (
    <div className={styles.programWrapper}>
      <Container>
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
            <Col sm={6} key={id}>
              <div className="relative flex justify-center">
                <Image src="/bgshadow.png" alt="alt" width={210} height={210} />
                <div className="absolute flex justify-center">              
                  <Image src={image} alt="creche" width={200} height={200} />
              </div>
              </div>
             
              <div className={styles.progHeader}>
                <h4 className="text-center text-xl font-bold mt-3">{schoolType}</h4>
                <p className="text-bold">{slug}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Program;
