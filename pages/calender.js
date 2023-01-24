import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Container, Col, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";

const Events = [
  {
    title: "Resumption",
    date: "2023-01-11",
  },
  {
    title: "Anointing Service",
    date: "2023-01-25",
  },
  {
    title: "World umbrella Day",
    date: "2023-02-10"
  },
  {
    title: "1st C.A/Skill Practice (Pre-school / Grade School)",
    date: "2023-02-06",
  },
  {
    title: "Community Service",
    date: "2023-02-13"
  },
  {
    title: "Open House",
    date: "2023-02-15"
  },
  {
    title: "Mid-term Break",
    date: "2023-02-16"
  },
  {
    title: "Mid-term Break",
    date: "2023-02-17"
  },
  {
    title: "Inauguration of club XCLUSIV",
    date: "2023-03-03"
  },
  {
    title: "2nd C.A (Grade level)",
    date: "2023-03-06"
  },
  {
    title: "2nd C.A (Grade level)",
    date: "2023-03-07"
  },
  {
    title: "2nd C.A (Grade level)",
    date: "2023-03-08"
  },
  {
    title: "2nd C.A (Grade level)",
    date: "2023-03-09"
  },
  {
    title: "2nd C.A (Grade level)",
    date: "2023-03-10"
  },
  {
    title: "international \n Women's Day",
    date: "2023-03-08"
  },
  {
    title: "Mothering Day",
    date: "2023-03-19"
  },
  {
    title: "Revision",
    date: "2023-03-17"
  },
  {
    title: "Examination",
    date: "2023-03-20"
  },
  {
    title: "Examination",
    date: "2023-03-21"
  },
  {
    title: "Examination",
    date: "2023-03-22"
  },
  {
    title: "Examination",
    date: "2023-03-23"
  },
  {
    title: "Examination",
    date: "2023-03-24"
  },
  {
    title: "Compilation of Results",
    date: "2023-03-27"
  },
  {
    title: "Compilation of  Results",
    date: "2023-03-28"
  },
  {
    title: "Compilation of Results",
    date: "2023-03-29"
  },
  {
    title: "Compilation of Results",
    date: "2023-03-30"
  },
  {
    title: "Compilation of Results",
    date: "2023-03-31"
  },
  {
    title: "Book Fair Day",
    date: "2023-03-31"
  },
];

const Calender = () => {
  return (
    <>
      <div className={styles.calenderBanner}></div>
        <Container>
          <Row>
            <Col>
              <div className={styles.fullCalender}>
                <h2>School Calender</h2>
                <FullCalendar
                  plugins={[dayGridPlugin]}
                  initialView="dayGridMonth"
                  weekends={true}
                  events={Events}
                />
              </div>
            </Col>
          </Row>
        </Container>
    </>
  );
};
export default Calender;
