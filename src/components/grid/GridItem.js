import React, { useRef, useLayoutEffect, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import get from "lodash/get";

const GridItem = ({
  delayPerPixel,
  i,
  originIndex,
  originOffset,
  children
}) => {
  const delayRef = useRef(0);
  const offset = useRef({ top: 0, left: 0 });
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    offset.current = {
      top: element.offsetTop,
      left: element.offsetLeft
    };

    if (i === originIndex) {
      originOffset.current = offset.current;
    }

    const dx = Math.abs(offset.current.left - originOffset.current.left);
    const dy = Math.abs(offset.current.top - originOffset.current.top);
    const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    delayRef.current = d * delayPerPixel;
  }, [delayPerPixel]);

  return (
    <motion.div ref={ref} variants={itemVariants} custom={delayRef}>
      {children}
    </motion.div>
  );
};

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5
  },
  visible: delayRef => ({
    opacity: 1,
    scale: 1,
    transition: { delay: delayRef.current }
  })
};

export default GridItem;
