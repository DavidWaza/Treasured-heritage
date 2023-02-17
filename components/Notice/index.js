import styles from "../../styles/Home.module.css";
import { Container, Col, Row } from "react-bootstrap";
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
                      <strong className="text-white not-italic">Motto:</strong>{" "}
                      We treasure your TREASURE
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
