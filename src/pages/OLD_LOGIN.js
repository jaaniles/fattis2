import React, { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Title from "../assets/FattisTitle";
import Letter from "../components/Letter";
import LoginForm from "../components/forms/LoginForm";
import Button from "../components/ui/Button";

import * as ds from "../design";

const ContainApp = styled(motion.div)({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center"
});

const Footer = styled(motion.div)(
  ds.mq({
    justifySelf: "flex-end",
    marginTop: "auto",

    paddingBottom: [ds.scale(0), ds.scale(1), ds.scale(10)]
  })
);

const FadedText = styled(motion.p)({
  textAlign: "center",
  opacity: 0.5,
  letterSpacing: "0.1em"
});

const LoginPage = () => {
  const [o, setO] = useState(false);
  const [ready, setReady] = useState(false);
  const [confirmSend, setConfirm] = useState(false);

  const openLetter = () => {
    setO(true);
  };

  const closeLetter = () => {
    setO(false);
  };

  const reset = () => {
    setO(false);
    setReady(false);
  };

  return (
    <ContainApp
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
    >
      <Title />
      <LoginForm blur={o} />

      <Footer>
        <Letter
          open={o}
          setOpen={openLetter}
          setClose={closeLetter}
          ready={ready}
          setReady={() => setReady(true)}
          confirmSend={confirmSend}
          setConfirm={setConfirm}
        />
        {ready && (
          <motion.div
            initial="initial"
            animate={ready ? "visible" : "hidden"}
            variants={{
              initial: {
                height: 0,
                opacity: 0
              },
              visible: {
                height: "100%",
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delay: 1
                }
              }
            }}
          >
            <FadedText key="p" variants={readyChildVariants}>
              Slide to Confirm >>
            </FadedText>
            <Button key="b" variants={readyChildVariants} onClick={reset}>
              Cancel
            </Button>
          </motion.div>
        )}
      </Footer>
      <FadedText style={{ marginTop: ds.scale(2) }}>
        <Link to="/main">I don't want to commit with an account</Link>
      </FadedText>
    </ContainApp>
  );
};

const readyChildVariants = {
  initial: {
    y: -5,
    scale: 0
  },
  visible: {
    y: 0,
    scale: 1
  }
};

export default LoginPage;
