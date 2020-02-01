import React from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";

const Number = styled(motion.h1)({
  textAlign: "center"
});

const variants = {
  initial: {
    y: 10,
    scale: 1.8
  },
  animate: {
    y: 0,
    scale: 1
  },
  exit: {
    y: -10
  }
};

const AnimatedNumber = ({ num = 0 }) => {
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Number
          key={num}
          variants={variants}
          initial={false}
          animate="animate"
          exit="exit"
        >
          {num}
        </Number>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedNumber;
