import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Herobanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.heroContainer}>
      <Slider {...settings}>
        <div className={`${styles.banner1} ${styles.overlay}`}>
            <p>NUMERACY</p>
        </div>
        <div className={`${styles.banner2} ${styles.overlay}`}>
            <p>UMBRELLA DAY</p>
        </div>
        <div className={`${styles.banner3} ${styles.overlay}`}>
            <p>LITERACY</p>
        </div>
      </Slider>
    </div>
  );
};

export default Herobanner;
