import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

import * as ds from "../../design";

const circleSize = 80;
const strokeWidth = 4;
const radius = circleSize / 2 - strokeWidth * 2;
const circumference = radius * 2 * Math.PI;
const strokeDasharray = `${circumference}px ${circumference}px`;
const initialOffset = circumference - (15 / 100) * circumference;
//const completedOffset = circumference - (200 / 100) * circumference;

const Circle = styled(motion.circle)(props => ({
  fill: "transparent",
  strokeWidth: strokeWidth,
  transform: "rotate(-90deg)",
  transformOrigin: "50% 50%"
}));

const variants = {
  initial: {
    scale: 1.35,
    strokeDashoffset: initialOffset,
    opacity: 0,
    transition: {
      ease: "linear",
      duration: 0.25
    }
  },
  hold: {
    opacity: 1,
    strokeDashoffset: 0,
    transition: {
      ease: "linear",
      duration: 0.5
    }
  },
  done: {
    opacity: 0,
    strokeDashoffset: initialOffset,
    transition: {
      ease: "linear",
      duration: 0.25
    }
  }
};

const ProgressCircleComponent = ({ disable }) => {
  if (disable) return null;

  return (
    <motion.svg
      height={circleSize}
      width={circleSize}
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#56ab2f" />
          <stop offset="100%" stop-color="#a8e063" />
        </linearGradient>
      </defs>
      <Circle
        style={{
          stroke: "url(#linear)"
        }}
        variants={variants}
        strokeDasharray={strokeDasharray}
        r={radius}
        cx={circleSize / 2}
        cy={circleSize / 2}
      />
    </motion.svg>
  );
};

export default ProgressCircleComponent;
