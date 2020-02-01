import React from "react";
import { motion } from "framer-motion";

const slideVariation = {
  initial: {
    x: 0,
    opacity: 1
  },
  slide: {
    x: 15,
    opacity: [0.2, 1, 0],
    transition: {
      duration: 3,
      eaes: "linear",
      loop: Infinity
    }
  }
};

const SlideRight = () => (
  <svg
    width="25px"
    height="25px"
    viewBox="0 0 25 25"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{ overflow: "visible" }}
  >
    <g stroke="none" strokeWidth="1">
      <motion.g fill="#000000" fillRule="nonzero">
        <motion.polygon points="72.9 37 45.4 64.5 54.5 73.7 82 46.2 91.2 37 82 27.8 54.5 0.3 45.4 9.5" />
        <motion.polygon points="28.3 37 0.8 64.5 10 73.7 37.5 46.2 46.6 37 37.5 27.8 10 0.3 0.8 9.5" />
      </motion.g>
    </g>
  </svg>
);

export default SlideRight;
