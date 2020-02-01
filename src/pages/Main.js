import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Calendar from "../components/Calendar";
import Background from "../components/animated/AnimatedBackground";
import man from "../assets/man-reading-illustration.svg";

import img from "../assets/foggy-forest.png";

import * as ds from "../design";

const TopContainer = styled(motion.div)({
  backgroundImage: `url(${img})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",

  width: "100%",
  minHeight: "55%",
  flex: 1
});

const Page = styled(motion.div)({
  width: "100%",
  height: "100%",

  position: "relative"
});

const Content = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  padding: ds.scale(1)
});

const Main = () => {
  return (
    <Page
      initial="exit"
      animate="animate"
      exit="exit"
      variants={{
        exit: {
          opacity: 0,
          transition: {
            when: "afterChildren"
          }
        },
        animate: {
          opacity: 1
        }
      }}
    >
      <Background />
      <TopContainer
        variants={{
          exit: {
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"
          },
          animate: {
            clipPath: "polygon(0 0, 100% 0%, 100% 85%, 0% 100%)",
            y: 0
          }
        }}
      >
        <Calendar />
      </TopContainer>
      <Content>
        <img alt="Empty state" src={man} />
        <h4>No logged data yet!</h4>
        <Link to="/">{`<< back`}</Link>
      </Content>
    </Page>
  );
};

export default Main;
