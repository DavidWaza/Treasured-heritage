/* eslint-disable react/no-unescaped-entities */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

const Testimonial = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className={`mySwiper h-96`}
      >
        <SwiperSlide>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
              ease: [0.9, 0.71, 0.7, 1.01],
            }}
            className={`text-center py-3 ${styles.testimonialWrapper}`}
          >
            <div className={styles.testimonialHeader}>
              <p>Parents Testimonial</p>
              <p>What people are saying about us</p>
            </div>
            <Row>
              <Col sm={12}>
                <div className={styles.testContainer}>
                  <p>
                    {`I am honestly impressed about the school’s efforts and my child’s performance. The standard and quality of learning and discipline here is also commendable.`}
                  </p>
                  <p>Mr Bolude</p>
                  <p>THS Parents</p>
                </div>
              </Col>
            </Row>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
              ease: [0.9, 0.71, 0.7, 1.01],
            }}
            className={`text-center py-2 ${styles.testimonialWrapper}`}
          >
            <div className={styles.testimonialHeader}>
              <p>Parents Testimonial</p>
              <p>What people are saying about us</p>
            </div>
            <Row>
              <Col sm={12}>
                <div className={styles.testContainer}>
                  <p>
                    {`My son’s progress is good value for money spent. You are doing a great job molding these young ones. I am impressed and appreciate. The progress my son is making in his studies are all due to your efforts.`}
                    .
                  </p>
                  <p>Bayo-Famoroti Motunrayo</p>
                  <p>THS Parents</p>{" "}
                </div>
              </Col>
            </Row>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
              ease: [0.9, 0.71, 0.7, 1.01],
            }}
            className={`text-center py-12  ${styles.testimonialWrapper}`}
          >
            <div className={styles.testimonialHeader}>
              <p>Parents Testimonial</p>
              <p>What people are saying about us</p>
            </div>
            <Row>
              <Col sm={12}>
                <div className={styles.testContainer}>
                  <p>Treasure, you are trying seriously, God bless you all.</p>
                  <p>Bayo-Famoroti Motunrayo</p>
                  <p>THS Parents</p>{" "}
                </div>
              </Col>
            </Row>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
              ease: [0.9, 0.71, 0.7, 1.01],
            }}
            className={`text-center py-12 ${styles.testimonialWrapper}`}
          >
            <div className={` ${styles.testimonialHeader}`}>
              <p>Parents Testimonial</p>
              <p>What people are saying about us</p>
            </div>
            <Row>
              <Col sm={12}>
                <div className={styles.testContainer}>
                  <p>Treasure, you are trying seriously, God bless you all.</p>
                  <p>Bayo-Famoroti Motunrayo</p>
                  <p>THS Parents</p>{" "}
                </div>
              </Col>
            </Row>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Testimonial;
