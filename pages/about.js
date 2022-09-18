import { Col, Container, Row } from "react-bootstrap";
import Abtstyles from "../styles/About.module.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import RightQuote from "../public/img/about/rightQuote.png";
import LeftQuote from "../public/img/about/leftQuote.png";
import Background from "../public/img/bgimg.png";
import Principal from "../public/img/Headmis.png";
import Spiral from "../public/img/about/doodleSpiral.svg";
import LightBrain from "../public/img/about/lightbrain.png";
import Congress from "../public/img/about/congress.png";
import Safety from "../public/img/about/safety.png";
import ballBoy from "../public/img/about/boyball.png";
import FortyThree from "../public/img/about/43.png";
import sevenSeven from "../public/img/about/77.png";
import oneTen from "../public/img/about/110.png";

const About = () => {
  return (
    <>
      <div className={Abtstyles.hero}></div>
      <Container>
        <Row>
          <Col>
            <div
              className={`${Abtstyles.Aheader} flex justify-end mt-10 font-bolder text-2xl`}
            >
              Our Mission & Vision
            </div>
          </Col>
          <Row>
            <Col sm={8}>
              <div className={Abtstyles.missionStatement}>
                <p className="mt-10">What we aim to achieve</p>
                <p>
                  <Image src={LeftQuote} alt="right quote" />
                  We provide a sound{" "}
                  <span className="font-bold">Montessori</span> system of
                  education required for the acquisition of relevant knowledge
                  and skills.
                </p>
                <div className="flex justify-center mt-5">
                  <Image src={Spiral} alt="spiral" />
                </div>
                <div className={Abtstyles.missionStatement}>
                  <p className="flex justify-end mt-5">
                    Where we see ourselves in the near future
                  </p>
                  <div className="flex justify-end">
                    <p>
                      1. To be among the foremost providers of all-round
                      qualitative education in Nigeria. <br />
                      2. A Citadel where leaders with high spiritual, moral and
                      intellectual values are raised.
                      <Image src={RightQuote} alt="left quote" />
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="relative flex justify-center mt-10">
                <Image src={Background} alt="background" />
                <div className="absolute right-2">
                  <Image src={Principal} alt="principal" />
                </div>
              </div>
              <span className="flex justify-center mt-3">
                <p className={styles.psudoName}>
                  Martina George - Bominuru(Mrs)
                </p>
              </span>
              <p className="flex justify-center">Proprietress</p>
            </Col>
          </Row>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <div className="relative">
              <div className={Abtstyles.CBg}>
                <div className="flex justify-center">
                  <p className="text-white mt-10 text-3xl font-bold">
                    Why Choose Us?
                  </p>
                </div>
                <div className="flex justify-center">
                  <p className="text-white text-xl text-center w-3/5">
                    We are poised to build a total child that is spiritually,
                    morally and academically sound, exuding self confidence that
                    can make the child compete favourably with his/her
                    contemporaries in any part of the world.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <div className={Abtstyles.whyUsContainer}>
            <div className={Abtstyles.whyUsContainerDiv}>
              <Row>
                <Col sm={4}>
                  <div className="flex justify-center mt-4">
                    <Image src={Congress} alt="congress" />
                  </div>
                  <div className="flex justify-center mt-2 font-bold">
                    <p>Experienced Teachers</p>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="flex justify-center mt-4">
                    <Image src={LightBrain} alt="congress" />
                  </div>
                  <div className="flex justify-center mt-2 font-bold">
                    <p>Fun Learning Environment</p>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="flex justify-center mt-4">
                    <Image src={Safety} alt="congress" />
                  </div>
                  <div className="flex justify-center mt-2 font-bold">
                    <p>School Safety</p>
                  </div>
                </Col>
              </Row>
            </div>
            <Row>
              <Col>
                <div className="flex justify-end scale-50 mt-10">
                  <Image src={ballBoy} alt="ball boy" />
                </div>
              </Col>
            </Row>
          </div>
        </Row>
        <Row>
          <div className={Abtstyles.staffContainer}>
            <div>
              <p className="text-center font-bold text-xl tracking-wide">
                Meet Our Staff
              </p>
              <p className="text-center tracking-wide font-bold">
                about our team
              </p>
            </div>
            <div>
              <Row>
                <Col sm={4}>
                  <div className={Abtstyles.staffCard}>
                    <div className="scale-50">
                      <Image src={FortyThree} alt="43" />
                    </div>
                    <p className="text-center scale-72 font-bold">
                      Mr George Bominuru
                    </p>
                    <p className="text-center scale-72">CEO</p>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className={Abtstyles.staffCard}>
                    <div className="scale-50">
                      <Image src={oneTen} alt="43" />
                    </div>
                    <p className="text-center scale-72 font-bold">
                      Mr Matina Bominuru
                    </p>
                    <p className="text-center scale-72">Propritress</p>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className={Abtstyles.staffCard}>
                    <div className="scale-50">
                      <Image src={sevenSeven} alt="43" />
                    </div>
                    <p className="text-center scale-72 font-bold">
                      Miss Clayton
                    </p>
                    <p className="text-center scale-72">Principal</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default About;
