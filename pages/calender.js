import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Container, Col, Row } from "react-bootstrap";
import styles from '../styles/Home.module.css'

const Events = [
    {
        title: "Stay at home",
        date: "2023-01-01"
    },
    {
        title: "Founders Day",
        date: "2023-01-02"
    }
]


const Calender = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className={styles.fullCalender}>
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
  );
};
export default Calender;
