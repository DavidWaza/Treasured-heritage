import styles from "../styles/Home.module.css";
import { Col, Row, Container } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useCallback, useState } from "react";
import { photos } from "../components/Photos/photos";
import GalleryImg from "../components/galleryImg/GalleryImg";

const GalleryAPI = () => {
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
          </Col>
        </Row>
        <Row className="g-3">
          <Col sm={6} md={4} lg={4}>
            <GalleryImg
              src="https://res.cloudinary.com/ddwkojhaj/image/upload/v1672689474/320654448_689975459286163_7574266468164963625_n.jpg_vm0qro.jpg"
              alt="pic"
              title="Christmas carol"
              link="/post/[id]" 
              as= "/post/christmas carol"
            />
          </Col>
          <Col sm={6} md={4} lg={4}>
            <GalleryImg
              src="https://res.cloudinary.com/ddwkojhaj/image/upload/v1672741696/314490512_553405696792435_1842189972391891263_n.jpg_juvmr9.jpg"
              alt="pic"
              title="Election Day"
              link="/post/[id]" 
              as= "/post/Election Day"
            />
          </Col>
          <Col sm={6} md={4} lg={4}>
            <GalleryImg
              src="https://res.cloudinary.com/ddwkojhaj/image/upload/v1672742640/313277613_540602051406133_4753692865514991676_n.jpg_a9ske2.jpg"
              alt="pic"
              title="Cereal Day"
              link="/post/[id]" 
              as= "/post/Election Day"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GalleryAPI;

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/photos?_limit=8`
//   );
//   const galleryPhotos = await res.json();

//   return {
//     props: {
//       galleryPhotos,
//     },
//   };
// };
