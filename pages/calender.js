import React from "react";
import { useState } from "react";
import Calendar, { CalendarDayHeader } from "../components/Calender/Calender";

const Calender = () => {
  const [yearAndMonth, setYearAndMonth] = useState([2021, 9]);

  return (
    <div>
      <Calendar
        yearAndMonth={yearAndMonth}
        onYearAndMonthChange={setYearAndMonth}
        renderDay={(calendarDayObject) => (
          <div>
            <CalendarDayHeader calendarDayObject={calendarDayObject} />
          </div>
        )}
      />
    </div>
  );
};

export default Calender;
