import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "@emotion/styled";
import { DateTime } from "luxon";

import GridItem from "./GridItem";

import * as ds from "../../design";

const GridStyle = styled(motion.div)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
  gridGap: 2
});

const Day = styled.div(
  {
    fontSize: ds.sizes.s,
    padding: "4px",
    textAlign: "center",
    opacity: 0.5
  },
  props =>
    props.thisMonth && {
      color: ds.colors.white,
      opacity: 1
    }
);

const Weekday = styled.div({
  color: ds.colors.white,
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  textAlign: "center",
  fontSize: ds.sizes.s,
  paddingBottom: 16
});

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

function Grid({ delayPerPixel = 0.002, calDates, today }) {
  const month = today.month;
  const originOffset = useRef({ top: 0, left: 0 });
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, []);

  return (
    <GridStyle initial="hidden" animate={controls} variants={{}}>
      {days.map((d, i) => (
        <Weekday key={i}>{d}</Weekday>
      ))}
      {calDates.map((d, i) => {
        const day = DateTime.fromISO(d);
        return (
          <GridItem
            key={i}
            i={i}
            originIndex={20}
            delayPerPixel={delayPerPixel}
            originOffset={originOffset}
          >
            <Day thisMonth={day.month === month}>{day.toFormat("d")}</Day>
          </GridItem>
        );
      })}
    </GridStyle>
  );
}

export default Grid;
