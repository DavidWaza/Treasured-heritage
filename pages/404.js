import styles from "../styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from 'next/link'

const InvalidPage = () => {
  return (
    <Container className={` ${styles.invalidBG}`}>
      <Row>
        <Col sm={6}>
          <div className="flex w-1/2 md:w-full md:flex justify-center ">
            <Image src="/ths-404.png" alt="404" height={300} width={200} />
          </div>
        </Col>
        <Col sm={6}>
            <div className={styles.notFound}>
                <p>404</p>
                <p>Page not Found!</p>
                <p>kindly go back to <Link href="/">class</Link></p>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InvalidPage;
