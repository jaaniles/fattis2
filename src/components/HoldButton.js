import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";

import ProgressIndicator from "./animated/ProgressIndicator";
import CheckboxIcon from "../assets/components/Checkbox";

export const HOLD_DURATION = 0.5;

const Button = styled(motion.div)({
  overflow: "visible",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  WebkitTapHighlightColor: "transparent",

  position: "absolute",
  top: 0,
  left: 0,

  width: 80,
  height: 80,

  userSelect: "none",

  svg: {
    width: 60,
    height: 60
  }
});

const mainVariants = {
  initial: {
    scale: 1,
    opacity: 1
  },
  hold: {
    opacity: 1,
    transition: {
      opacity: {
        duration: HOLD_DURATION
      }
    }
  },
  done: {
    scale: [1.35, 1]
  }
};

const HoldButton = ({ handleOnComplete, updateJournal, todaySuccess }) => {
  const [done, setDone] = useState(false);
  const ctrl = useAnimation();

  useEffect(() => {
    if (todaySuccess && todaySuccess.success) {
      setDone(true);
    }
  }, [todaySuccess]);

  const handleTap = async () => {
    await ctrl.start("hold");
    updateJournal(!done);
    if (!done) {
      handleOnComplete();
    }

    setDone(!done);

    await ctrl.start("done");
    await ctrl.start("initial");
  };

  const handleTapEnd = () => {
    ctrl.stop("hold");
    ctrl.start("initial");
  };

  return (
    <Button
      done={done}
      initial="initial"
      animate={ctrl}
      onTapStart={handleTap}
      onTapCancel={handleTapEnd}
      onPanEnd={handleTapEnd}
      variants={mainVariants}
    >
      <CheckboxIcon check={done} />
      <ProgressIndicator />
    </Button>
  );
};

export default HoldButton;
