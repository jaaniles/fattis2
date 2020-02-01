import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

import * as ds from "../design";

const TitleStyle = styled(motion.div)({
  color: "#11113F",
  fontFamily: "Sacramento",
  fontSize: 64,
  display: "flex",

  position: "relative",

  p: {
    marginTop: ds.scale(0),
    marginBottom: 0
  }
});

const item = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const container = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Title = () => {
  const title = "Fattis".split("");

  if (title.length < 1) {
    return;
  }

  return (
    <motion.div
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      initial="hidden"
      animate="visible"
    >
      <TitleStyle variants={container} initial="hidden" animate="visible">
        {title.map((c, i) => (
          <motion.p key={i} variants={item}>
            {c}
          </motion.p>
        ))}
      </TitleStyle>
      <motion.div
        variants={{
          hidden: {
            y: -30,
            x: -100,
            opacity: 0
          },
          visible: {
            x: 75,
            opacity: 1,
            transition: {
              delay: 1.5
            }
          }
        }}
      >
        <p
          style={{
            color: "#363648",
            fontWeight: 200,
            fontSize: 16
          }}
        >
          stop the fatness
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Title;
