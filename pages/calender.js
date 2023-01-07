import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Calender.module.css";
import Calendar, { CalendarDayHeader } from "../components/Calender/Calender";

const Calender = () => {
  const [yearAndMonth, setYearAndMonth] = useState([2023, 1, 2, 3]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className={styles.schText}>
              <p>School Calender</p>
            </div>
            <div>
              <Link href="#">
                <p className={styles.downloadCalender}>2023 - 2024 calender</p>
              </Link>
            </div>
            <Calendar
              yearAndMonth={yearAndMonth}
              onYearAndMonthChange={setYearAndMonth}
              renderDay={(calendarDayObject) => (
                <div>
                  <CalendarDayHeader calendarDayObject={calendarDayObject} />
                </div>
              )}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Calender;
