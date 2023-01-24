import { Col, Container, Row } from "react-bootstrap";
import contactStyles from "../styles/Contact.module.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Form from "../components/Form/index";

const ContactPage = () => {
  return (
    <>
      <div className={contactStyles.bannerImgContainer}></div>
      <Container>
        <Row className="g-5">
          <Col sm={4} md={4}>
            <div className={contactStyles.addrContainer}>
              <span className="flex justify-center pt-10">
                <Image
                  src="/location.png"
                  alt="location"
                  width={40}
                  height={40}
                />
              </span>
              <div className={contactStyles.contactSlug}>
                <p>
                  Visit our office hq.
                </p>
                <p>
                  112 Moferere street, off Ajilosun. Behind Ado Local Govt,
                  Health Center. Ado
                </p>
              </div>
            </div>
          </Col>
          <Col sm={4} md={4}>
            <div className={contactStyles.addrContainer}>
              <span className="flex justify-center pt-10">
                <Image src="/call.png" alt="location" width={40} height={40} />
              </span>
              <div className={contactStyles.contactSlug}>
                <p>Talk to us</p>
                <p>
                  Do you want to make any enquiries? We are here for you. Call
                  us.
                </p>
              </div>

              <Link href="tel:08029246221">
                <div className="flex justify-center mt-4">
                  <button className="flex -mt-3 cursor-pointer">
                    <div className=" relative">
                      <Image
                        src="/buttonBk.png"
                        alt="back"
                        height={49}
                        width={150}
                      />
                    </div>
                    <div className="flex absolute mt-1.5">
                      <Image
                        src="/buttonFk.png"
                        alt="front"
                        height={45}
                        width={140}
                      />
                    </div>
                    <div className="absolute ml-12 mt-3 tracking-wider font-bold">
                      <p className="text-white">Call</p>
                    </div>
                  </button>
                </div>
              </Link>
            </div>
          </Col>
          <Col sm={4} md={4}>
            <div className={contactStyles.addrContainer}>
              <span className="flex justify-center pt-10">
                <Image src="/email.png" alt="location" width={40} height={40} />
              </span>
              <div className={contactStyles.contactSlug}>
                <p>Send us an Email @</p>
                <p>treasuredheritagemontessori<br />@gmail.com</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <div className={styles.contactBg}>
            <Form />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ContactPage;
