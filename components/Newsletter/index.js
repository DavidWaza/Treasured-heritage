import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import { Col, Row, Container } from "react-bootstrap";
import Image from "next/image";
import { motion } from "framer-motion";

const placeholder = "waza@example.com";

const Newsletter = () => {
  const router = useRouter();
  const [state, setState] = useState({ email: "" });
  const isValid = state.email != null && state.email.trim().length > 0;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleClick = () => {
    if (state.email != null && state.email.length > 0) {
      return router.push("/success");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container className={styles.newsletterBg}>
      <Row>
        <Col sm={6}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.6,
              ease: [0.9, 0.71, 0.7, 1.01],
            }}
            className={styles.NewsletterPng}
          >
            <Image
              src="https://res.cloudinary.com/ddwkojhaj/image/upload/w_500,c_scale/v1668755860/news_tqusof.png"
              alt="alt"
              height={300}
              width={300}
            />
          </motion.div>
        </Col>
        <Col sm={6}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.7,
              ease: [0.9, 0.71, 0.7, 1.01],
            }}
            className={styles.newsLetterIcon}
          >
            <Image src="/Vector.png" alt="" width={50} height={50} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.6,
              ease: [0.9, 0.71, 0.7, 1.01],
            }}
            className={styles.newsLettertext}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
                ease: [0.9, 0.71, 0.7, 1.01],
              }}
            >
              Subscribe to our newsletter
            </motion.p>
            <p>Be the first to get latest updates on your email</p>
          </motion.div>
          <form onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.4,
                ease: [0.9, 0.71, 0.7, 1.01],
              }}
              className={styles.newsletterInputBg}
            >
              <input
                value={state.email}
                type="text"
                name="email"
                className={styles.newsletterInput}
                placeholder={placeholder}
                onChange={handleChange}
              ></input>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
                ease: [0.9, 0.71, 0.7, 1.01],
              }}
              className={styles.newsletterButton}
            >
              <button
                className={
                  isValid
                    ? `${styles.subButton}`
                    : `${styles.subButtonDisabled}`
                }
                type="submit"
                value="Submit"
                onClick={handleClick}
              >
                {!isValid ? "Fill the form" : "Subscribe"}
              </button>
            </motion.div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};
export default Newsletter;
