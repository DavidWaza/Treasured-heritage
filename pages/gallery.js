import styles from "../styles/Home.module.css";
import { Col, Row, Container } from "react-bootstrap";
// import ImgsViewer from "react-images-viewer";

const Gallery = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <section>
              <div className={styles.Herogallery}>
                <h1>Gallery</h1>
              </div>
            </section>
            <section>
              
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Gallery;
