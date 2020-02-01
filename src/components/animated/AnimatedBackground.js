import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const PageOverlay = styled.div({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  pointerEvents: "none",

  overflow: "hidden",

  zIndex: -1,

  "> *": {
    pointerEvents: "auto",
    zIndex: 15
  }
});

const Shape = styled(motion.div)(props => ({
  width: props.size || 20,
  height: props.size || 20,

  position: "absolute",
  left: props.pos || 0,
  bottom: 0,
  display: "block",
  listStyle: "none",

  filter: "blur(5px)",

  background: "rgba(255, 255, 255, 0.1)",

  borderRadius: props.radius || 0
}));

const createRandom = () => ({
  left: `${randomInt(-5, 105)}%`,
  size: `${randomInt(10, 25)}px`,
  radius: `${randomInt(0, 8)}px`
});

const createRandomTiming = i => ({
  duration: 25 + randomInt(0, 20),
  delay: i % 2 === 0 ? i + randomInt(2, 5) : i / i + randomInt(0.5, 1.5)
});

const SHAPE_AMOUNT = 18;
const shapes = [...Array(SHAPE_AMOUNT).keys()].map(() => createRandom());

const AnimatedBackground = () => {
  return (
    <PageOverlay>
      {shapes.map((s, i) => (
        <Shape
          onClick={() => console.log("click?")}
          size={s.size}
          pos={s.left}
          radius={s.radius}
          key={i}
          initial="initial"
          animate="live"
          whileTap="tap"
          variants={{
            initial: {
              y: 35,
              rotate: 0,
              opacity: 1
            },
            live: {
              y: -640,
              rotate: 900,
              scale: [1.2, 1, 0.35, 1, 0],
              opacity: [0.5, 0.5, 0.5, 0.25, 0],
              transition: {
                ease: [0.55, 0.085, 0.68, 0.53],
                ...createRandomTiming(i),
                loop: Infinity
              }
            },
            tap: {
              scale: 2,
              rotate: -720,
              transition: {
                flip: Infinity,
                duration: 2,
                repeatDelay: 2
              }
            }
          }}
        />
      ))}
    </PageOverlay>
  );
};

export default AnimatedBackground;

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
