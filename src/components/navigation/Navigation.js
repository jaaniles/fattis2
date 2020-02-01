import React, { useContext } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { DateTime } from "luxon";

import HoldButton from "../HoldButton";

import { AppContext } from "../../Provider";

import { ReactComponent as FattisIcon } from "../../assets/fattis_small.svg";

const Navigation = styled(motion.div)({
  position: "relative",
  maxHeight: 80,
  maxWidth: 500,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  fontWeight: 600,

  "> svg": {
    height: 150,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  img: {
    height: 150,
    position: "absolute",
    right: 0,
    bottom: 0
  }
});

const NavigationComponent = () => {
  const { addNotification, updateJournal, journal, appLoading } = useContext(
    AppContext
  );
  const today = DateTime.local().toISODate();

  const handleConfirmDay = () => {
    addNotification("CONFIRM");
  };

  const todaySuccess = journal.find(d => d.id === today);

  return (
    <Navigation
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
      }}
    >
      {!appLoading && (
        <HoldButton
          todaySuccess={todaySuccess}
          handleOnComplete={handleConfirmDay}
          updateJournal={updateJournal}
        />
      )}
      <FattisIcon style={{ opacity: 0.75 }} />
    </Navigation>
  );
};

export default NavigationComponent;
