import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { transparentize } from "polished";

const DURATION = 0.5;

const Indicator = styled(motion.div)({
  background: "#AB96FF",
  position: "absolute",
  bottom: 0,
  right: 0,

  borderTopRightRadius: 100,

  zIndex: 2,

  width: "100%",
  height: "100%"
});

const Outline = styled(motion.div)({
  background: `${transparentize(0.75, "#AB96FF")}`,
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100%",

  zIndex: 1,

  borderTopRightRadius: 100
});

const ProgressIndicator = () => {
  return (
    <>
      <Indicator variants={variants} />
      <Outline variants={outlineVariants} />
    </>
  );
};

const variants = {
  initial: {
    opacity: 0,
    scale: 1.5,
    transformOrigin: "bottom left"
  },
  hold: {
    opacity: 1,
    scale: 2.5,
    transition: {
      scale: {
        ease: [0.645, 0.045, 0.355, 1],
        duration: DURATION
      },
      opacity: {
        duration: DURATION / 2
      },
      duration: DURATION
    }
  },
  done: {
    scale: 3.5,
    opacity: 0
  }
};

const outlineVariants = {
  initial: {
    transformOrigin: "bottom left",
    opacity: 0,
    scale: 2.5
  },
  hold: {
    scale: 2.5,
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.15
      },
      duration: DURATION
    }
  },
  done: {
    opacity: 0,
    transition: {
      duration: 0.1
    }
  }
};

export default ProgressIndicator;
