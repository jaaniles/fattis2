import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import firebase from "firebase/app";
import "firebase/auth";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

const LoginPageContainer = styled(motion.div)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

const Login = () => {
  return (
    <LoginPageContainer
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0,
          y: 50
        }
      }}
    >
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </LoginPageContainer>
  );
};

export default Login;
