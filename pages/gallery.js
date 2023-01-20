import styles from "../styles/Home.module.css";
// import Image from "next/image";
import { Col, Row, Container } from "react-bootstrap";
import { GalleryImage } from "../components/DataArr/Data";

const GalleryAPI = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <section>
              <div className={styles.Herogallery}>
                <h1>THS Gallery Album</h1>
              </div>
            </section>
          </Col>
        </Row>
        <Container>
          <Row className="g-3">
            {GalleryImage.map((x) => (
              <Col sm={6} md={4} lg={4} key={x.id}>
                <label className={styles.card}>
                  <div className={styles.cardBody}>
                    <div className={styles.cardBodyCover}>
                      <img
                        alt="img"
                        className={styles.cardBodyCoverImage}
                        src={x.src}
                      />
                      <span className={styles.cardBodyCoverCheckbox}>
                        <svg
                          className={styles.cardBodyCoverCheckboxSvg}
                          viewBox="0 0 12 10"
                        >
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                    </div>
                    <header className={styles.cardBodyHeader}>
                      <p className={styles.cardBodyHeaderSubtitle}>
                        {x.category}
                      </p>
                      <h2 className={styles.cardBodyHeaderTitle}>{x.title}</h2>
                    </header>
                  </div>
                </label>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default GalleryAPI;
