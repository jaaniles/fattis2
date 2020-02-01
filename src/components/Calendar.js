import React from "react";
import { DateTime } from "luxon";
import styled from "@emotion/styled";

import Grid from "./grid/Grid";

import * as ds from "../design";

const CalendarContainer = styled.div({
  padding: `${ds.scale(1)} ${ds.scale(0)}`,

  h4: {
    color: ds.colors.white,
    textAlign: "center",
    marginBottom: ds.scale(2),
    textTransform: "uppercase"
  }
});

const Calendar = () => {
  const dt = DateTime.local();
  const month = dt.toFormat("LLLL");

  const firstDayOfMonth = dt.startOf("month").toISO();
  const dayNumOfFirstDay = DateTime.fromISO(firstDayOfMonth).toFormat("c");
  const calDaysOff = dayNumOfFirstDay - 1;
  const calFirstDay = DateTime.fromISO(firstDayOfMonth).plus({
    days: -calDaysOff
  });

  const calDates = getCalDates(calFirstDay);

  return (
    <CalendarContainer>
      <h4>{month}</h4>
      <Grid calDates={calDates} today={dt} />
    </CalendarContainer>
  );
};

const getCalDates = startDate =>
  [...Array(42).keys()].map((x, i) => startDate.plus({ days: i }).toISO());

export default Calendar;
