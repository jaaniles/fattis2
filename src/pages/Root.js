import React, { useContext, useEffect } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { DateTime } from "luxon";

import { AppContext } from "../Provider";

import * as ds from "../design";

const LayoutWrapper = styled(motion.div)({
  display: "grid",
  gridTemplateColumns: ds.grid.columns,
  position: "relative",
  height: "100%",

  overflow: "scroll"
});

const Content = styled.div({
  gridColumn: "main",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

const Topper = styled(motion.div)({
  gridColumn: "full-start / full-end",
  color: ds.colors.white,
  margin: "1em 1em",

  h1: {
    fontSize: "2.75em",
    margin: "0px 8px 0px 0px"
  },
  h3: {
    margin: 0
  },
  h4: {
    margin: 0,
    fontSize: "0.85em",
    opacity: 0.75
  },

  "> div": {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "left"
  }
});

const DaysRow = styled(motion.div)({
  display: "flex",

  "> div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    color: "white",
    "&:not(:last-of-type)": {
      marginRight: "2em"
    }
  }
});

const Section = styled.div({
  height: "100%",
  width: "100%",
  scrollSnapAlign: "start"
});

const DayIndicator = styled(motion.div)({
  width: 12,
  height: 12,
  borderRadius: "50%",
  marginBottom: 8
});

const Main = () => {
  const now = DateTime.local();
  const { journal, getJournal, user } = useContext(AppContext);
  const daysOfWeek = [...Array(7).keys()].map((x, i) =>
    now.startOf("week").plus({ days: i })
  );

  useEffect(() => {
    getJournal();
  }, [user]);

  return (
    <LayoutWrapper
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        }
      }}
    >
      <Topper>
        <div>
          <h1>{now.toFormat("dd")}</h1>
          <div>
            <h3>{now.toFormat("EEEE")}</h3>
            <h4>{now.toFormat("LLLL")}</h4>
          </div>
        </div>
      </Topper>
      <Content>
        <DaysRow
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: { staggerChildren: 0.07, delayChildren: 0.2 }
            }
          }}
        >
          {daysOfWeek.map((d, i) => {
            const success = journal.find(j => j.id === d.toISODate());
            const isToday = d.toISODate() === now.toISODate();

            return (
              <motion.div key={i} variants={dayVariants}>
                <p
                  style={{
                    fontWeight: isToday ? 800 : 200,
                    opacity: isToday ? 1 : 0.75,
                    letterSpacing: 1.15
                  }}
                >
                  {d.toFormat("dd")}
                </p>
                <DayIndicator
                  initial="initial"
                  animate={success && success.success ? "success" : "initial"}
                  variants={{
                    initial: { background: "#E7EBE7", scale: 1 },
                    success: {
                      background: "#3D9161",
                      scale: [2, 1],
                      transition: { ease: "anticipate" }
                    }
                  }}
                />
                <p style={{ opacity: 0.8, marginTop: 8, fontSize: ds.sizes.s }}>
                  {d.toFormat("EEEEE")}
                </p>
              </motion.div>
            );
          })}
        </DaysRow>
      </Content>
    </LayoutWrapper>
  );
};

const dayVariants = {
  initial: { opacity: 0, scale: 0, y: 40 },
  animate: {
    scale: [1.3, 1],
    opacity: 1,
    y: 0,
    transition: { ease: [0.68, -0.55, 0.265, 1.55] }
  }
};

export default Main;
