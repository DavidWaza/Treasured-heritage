/* eslint-disable react/no-unescaped-entities */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../../styles/Home.module.css";
const Testimonial = () => {
  return (
    <>
      <div className={`text-center ${styles.testimonialWrapper}`}>
        <div className={styles.testimonialHeader}>
          <p>Parents Testimonial</p>
          <p>What people are saying about us</p>
        </div>
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div className={styles.myCarousel}>
            <p>
              It is a school that can build up the future of the child and also
              the spiritual life of the child
            </p>
            <p>OSIFO PAULA</p>
            <p>THS Parents</p>
          </div>
          <div className={styles.myCarousel}>
            <p>
            Treasure, you are trying seriously, God bless you all
            </p>
            <p>Bayo-Famoroti Motunrayo</p>
            <p>THS Parents</p>
          </div>
          <div className={styles.myCarousel}>
            <p>
              A top notch school that provides your school a fast paced learning environment,
              providing brilliant kids.
            </p>
            <p>David Waza</p>
            <p>Web Developer</p>
          </div>
        </Carousel>
      </div>
    </>
  );
};
export default Testimonial;
