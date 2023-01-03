/* eslint-disable react/no-unescaped-entities */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.6,
          ease: [0.9, 0.71, 0.7, 1.01],
        }}
        className={`text-center ${styles.testimonialWrapper}`}
      >
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
            <p>Treasure, you are trying seriously, God bless you all</p>
            <p>Bayo-Famoroti Motunrayo</p>
            <p>THS Parents</p>
          </div>
          <div className={styles.myCarousel}>
            <p>
              A top notch school that provides your school a fast paced learning
              environment, providing brilliant kids.
            </p>
            <p>David Waza</p>
            <p>Web Developer</p>
          </div>
        </Carousel>
      </motion.div>
    </>
  );
};
export default Testimonial;
