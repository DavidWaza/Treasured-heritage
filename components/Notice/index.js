import styles from "../../styles/Home.module.css";
import { Container,Col, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export const Notice = () => {
  return (
    <>
      <Row>
        <Col>
          <div className={styles.noticeBg}>
            <Container>
            <Row>
              <Col sm={12}>
                <div className={styles.noticeText}>
                  <p>
                    <strong className="text-white">Motto:</strong>{" "}We are a caring community school focusing on inspiring the
                    child through practical learning and embedding in all we do
                  </p>
                </div>
              </Col>
            </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </>
  );
};
