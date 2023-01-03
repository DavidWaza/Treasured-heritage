import styles from "../styles/Home.module.css";
import { Col, Row, Container } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useCallback, useState } from "react";
import GalleryImg from "../components/galleryImg/GalleryImg";
import { GalleryPage } from "../components/DataArr/Data";

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
        <Row className="g-3">
          {GalleryPage.map((x) => (
            <Col sm={6} md={6} lg={4} key={x.id}>
              <div className={styles.galleryCard}>
                <GalleryImg
                  src={x.src}
                  alt="pic"
                  title={x.title}
                  link="/post/[id]"
                  as={x.as}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default GalleryAPI;

