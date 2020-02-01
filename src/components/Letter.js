import React from "react";
import styled from "@emotion/styled";
import { motion, useMotionValue, useTransform } from "framer-motion";

import Handwritten from "./typography/Handwritten";
import Register from "./forms/Register";

import * as ds from "../design";

const Back = styled.div({
  width: 200,
  height: 100,
  background: "#422236",
  position: "absolute",
  bottom: 0
});

const TopFold = styled(motion.div)({
  position: "absolute",
  top: 50,
  width: 0,
  height: 0,
  borderStyle: "solid",
  borderWidth: "65px 100px 0 100px",
  transformOrigin: "50% 0%",
  borderColor: "#67465B transparent transparent transparent"
});

const Body = styled.div({
  position: "absolute",
  bottom: 0,
  width: 0,
  height: 0,
  borderStyle: "solid",
  borderWidth: "0 0 100px 200px",
  borderColor: "transparent transparent #573349 transparent",
  zIndex: 2
});

const Left = styled.div({
  position: "absolute",
  bottom: 0,
  width: 0,
  height: 0,
  borderStyle: "solid",
  borderWidth: "50px 0 49px 100px",
  borderColor: "transparent transparent transparent #5B364C",
  zIndex: 2
});

const LetterContainer = styled(motion.div)({
  position: "relative",
  width: 200,
  height: 150,
  cursor: "pointer"
});

const LetterContent = styled(motion.div)({
  position: "absolute",
  overflow: "hidden",
  zIndex: 1,
  backgroundImage: "linear-gradient(21deg, #FDEEEE 8%, #F7F4F4 100%)",

  padding: ds.scale(0),

  display: "flex",
  flexDirection: "column",

  WebkitTapHighlightColor: "transparent",
  userSelect: "none",
  WebkitTouchCallout: "none",

  "> *": {
    WebkitTapHighlightColor: "transparent",
    userSelect: "none",
    WebkitTouchCallout: "none"
  }
});

const container = {
  initial: {
    y: [5, 0],
    x: 0,
    opacity: 1,
    transition: {
      x: {
        yoyo: 0
      },
      opacity: {
        yoyo: 0
      },
      when: "afterChildren",
      yoyo: Infinity
    }
  },
  open: {
    y: 0,
    x: 0,
    scaleX: [1.08, 1],
    scaleY: [0.85, 1]
  },
  interacting: {
    x: 0,
    scale: 1.05,
    opacity: 1
  },
  ready: {
    scale: 1,
    x: [0, 15],
    opacity: [1, 0.9],
    transition: {
      when: "afterChildren",
      ease: "backInOut",
      loop: Infinity,
      repeatDelay: 0.5,
      delay: 1
    }
  },
  send: {
    opacity: [1, 0],
    x: 350,
    rotate: 45
  }
};

const Letter = ({
  open,
  setOpen,
  setClose,
  ready,
  setReady,
  confirmSend,
  setConfirm
}) => {
  const letterX = useMotionValue(0);
  const discardRotation = useTransform(letterX, [0, -10], [0, -5]);
  const discardOpacity = useTransform(letterX, [0, -10], [1, 0.5]);
  const discardScale = useTransform(letterX, [0, -10], [1, 0.85]);

  const handleDiscard = (e, info) => {
    if (info.point.x < -10) {
      setClose();
    }
  };

  const handleLetterDrag = (e, info) => {
    if (info.point.x > 50) {
      setConfirm(true);
    }
  };

  const anim = getLetterState(open, ready, confirmSend);

  return (
    <LetterContainer
      drag={ready ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.5}
      dragMomentum={false}
      onDragEnd={handleLetterDrag}
      initial="initial"
      animate={anim}
      variants={container}
      whileTap={ready ? "interacting" : "false"}
      onClick={() => {
        if (!open) {
          setOpen();
        }
      }}
    >
      <Back />
      <LetterContent
        style={{
          x: letterX,
          rotate: discardRotation,
          scale: discardScale,
          opacity: discardOpacity
        }}
        drag={open ? "x" : "false"}
        dragConstraints={{ left: 0, right: 0 }}
        dragMomentum={false}
        dragElastic={0.05}
        onDragEnd={handleDiscard}
        whileDrag="drag"
        variants={{
          initial: {
            left: [-50, 20, 20],
            width: ["135%", "65%", "65%"],
            bottom: [100, 100, 20],
            height: [375, 125, 100],
            boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.25)",
            transition: {
              when: "afterChildren",
              ease: "backIn"
            }
          },
          open: {
            bottom: [20, 100, 100],
            height: [200, 200, 375],
            width: ["65%", "65%", "135%"],
            left: [20, 20, -50],
            boxShadow: "1px 10px 4px 0 rgba(0,0,0,0.50)",
            transition: {
              when: "beforeChildren",
              boxShadow: {
                delay: 0.3
              },
              ease: "anticipate",
              delay: 0.2
            }
          },
          ready: {
            left: [-50, 20, 20],
            width: ["135%", "65%", "65%"],
            bottom: [100, 100, 20],
            opacity: [1, 1, 0],
            height: [375, 125, 0],
            transition: {
              when: "afterChildren",
              ease: "backIn"
            }
          },
          drag: {
            rotate: 360
          }
        }}
      >
        <Handwritten>Join us</Handwritten>
        <Register cancel={setClose} setReady={setReady} />
      </LetterContent>
      <TopFold
        variants={{
          initial: {
            scaleY: -1,
            transition: {
              delay: 0.2
            }
          },
          ready: {
            scaleY: 1,
            transition: {
              ease: "linear",
              delay: 1.15
            }
          },
          open: {
            scaleY: -1
          }
        }}
      />
      <Body />
      <Left />
      <Handwritten
        style={{
          position: "absolute",
          bottom: "2%",
          right: "5%",
          zIndex: 5,
          color: ds.colors.malibu,
          fontSize: 22,
          fontWeight: 400,
          textAlign: "right",
          opacity: 0.5
        }}
      >
        Fattis
      </Handwritten>
    </LetterContainer>
  );
};

const getLetterState = (open, ready, send) => {
  if (send) {
    return "send";
  }

  if (ready) {
    return "ready";
  }

  if (open) {
    return "open";
  }

  return "initial";
};

export default Letter;
