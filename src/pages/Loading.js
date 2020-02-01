import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { ReactComponent as Fattis } from "../assets/fattis_small.svg";

const Container = styled(motion.div)({
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  color: "white",
  fontWeight: 800,
  fontSize: 24,

  img: {
    width: 140
  }
});

const LoadingScreen = () => (
  <Container
    initial="initial"
    animate="enter"
    exit="exit"
    variants={{
      initial: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      exit: {
        opacity: 1,
        transition: {
          delay: 0.25
        }
      }
    }}
  >
    <motion.div
      variants={{
        initial: {
          rotate: 0,
          scale: 0.75
        },
        enter: {
          x: 0,
          rotate: [-15, 15],
          transition: {
            yoyo: Infinity
          }
        },
        exit: {
          x: "47%",
          y: "200%",
          scaleX: -1,
          opacity: 0,
          transition: {
            ease: [0.645, 0.045, 0.355, 1],
            duration: 1,
            delay: 0.25
          }
        }
      }}
    >
      <Fattis />
    </motion.div>
    <motion.p
      variants={{
        animate: { opacity: 1 },
        exit: { y: 200, opacity: 0, transition: { delay: 0.3 } }
      }}
    >
      Welcome!
    </motion.p>
  </Container>
);

export default LoadingScreen;
