import styles from "../styles/Home.module.css";
// import Image from "next/image";
import { Col, Row, Container } from "react-bootstrap";
import { GalleryImage } from "../components/DataArr/Data";
import GalleryImg from "../components/galleryImg/GalleryImg";

const GalleryAPI = () => {
  return (
    <>
      <section>
        <div className={styles.Herogallery}>
          <p>THS Gallery Album</p>
        </div>
      </section>
      <Container>
        <Row className="g-3">
          {GalleryImage.map((x) => (
            <Col sm={6} md={4} lg={4} key={x.id}>
              <GalleryImg
                src={x.src}
                alt="pic"
                category={x.category}
                title={x.title}
                link="/post/[id]"
                as={x.as}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default GalleryAPI;
