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
      <div className={styles.banner1}>
        <div className=" text-white">
          <p className=" text-3xl">Welcome to </p>
          <p className=" sm:text-7xl font-bold max-w-xl">
            Treasured <span className="text-amber-400">Heritage</span> School
          </p>
          <p className="text-2xl mt-4">A Christian Montessori School</p>
        </div>
      </div>
    </div>
  );
};

export default Herobanner;
