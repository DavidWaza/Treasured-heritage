import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import { Container, Col, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";

const Form = () => {
  const [state, handleSubmit] = useForm("xgeqarov");
  if (state.succeeded) {
    return (
      <>
        <p className="text-center text-white font-bold text-4xl">
          Thanks for your feeback!
        </p>
        <p className="text-center text-white">
          You will hear from us shortly..
        </p>
      </>
    );
  }
  return (
    <Container>
      <Row>
        <Col>
          <div className={styles.formSpree}>
            <form onSubmit={handleSubmit} autoComplete="off">
              <label htmlFor="name" className="text-white">
                Your Name
              </label>
              <input
                id="name"
                type="name"
                name="name"
                className="input input-secondary input-block"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <label htmlFor="email" className="text-white">
                Your Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="input input-secondary input-block"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <label htmlFor="subject" className="text-white">
                Subject
              </label>
              <input
                id="subject"
                type="subject"
                name="subject"
                className="input input-secondary input-block"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
              <label htmlFor="message" className="text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="pl-1 w-100 h-20 rounded-md textarea textarea-secondary textarea-block"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <div className="relative flex justify-center mt-2">
                <button type="submit" disabled={state.submitting}>
                  <Image
                    src="/buttonBk.png"
                    alt="submit"
                    height={50}
                    width={150}
                  />
                  <div className="absolute top-2">
                    <Image
                      src="/rec6.png"
                      alt="submit"
                      height={50}
                      width={150}
                    />
                    <p className="text-white top-3 right-12 absolute tracking-wide font-bold">
                      Submit
                    </p>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Form;
