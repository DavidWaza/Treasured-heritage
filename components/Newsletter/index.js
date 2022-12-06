import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import { Col, Row, Container } from "react-bootstrap";
import Image from "next/image";

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
          <div className={styles.NewsletterPng}>
            <Image
              src="https://res.cloudinary.com/ddwkojhaj/image/upload/w_500,c_scale/v1668755860/news_tqusof.png"
              alt="alt"
              height={300}
              width={300}
            />
          </div>
        </Col>
        <Col sm={6}>
          <div className={styles.newsLetterIcon}>
            <Image src="/Vector.png" alt="" width={50} height={50} />
          </div>
          <div className={styles.newsLettertext}>
            <p>Subscribe to our newsletter</p>
            <p>Be the first to get latest updates on your email</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.newsletterInputBg}>
              <input
                value={state.email}
                type="text"
                name="email"
                className={styles.newsletterInput}
                placeholder={placeholder}
                onChange={handleChange}
              ></input>
            </div>
            <div className={styles.newsletterButton}>
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
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};
export default Newsletter;
