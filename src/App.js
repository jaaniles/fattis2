import React, { useEffect, useContext } from "react";
import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";
import { AnimatePresence } from "framer-motion";

import fb from "./components/firebase";

import AnimatedBackground from "./components/animated/AnimatedBackground";
import Navigation from "./components/navigation/Navigation";
import Notifications from "./components/notifications/Notifications";
import Root from "./pages/Root";
import Login from "./pages/Login";
import Loading from "./pages/Loading";

import { AppContext } from "./Provider";

import { ReactComponent as DecorationGraphic } from "./assets/decoration.svg";

import * as ds from "./design";

const ContainApp = styled.div({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100vh",
  maxHeight: "100vh",

  "> div": {
    ":first-of-type": {
      height: "85%",
      width: "100%"
    },
    ":last-of-type": {
      width: "100%",
      display: "flex",
      flex: 1
    }
  }
});

function App() {
  const [user, loading] = useAuthState(firebase.auth());
  const { createUser, setLoggedIn } = useContext(AppContext);

  useEffect(() => {
    handleUser();
  }, [user]);

  const handleUser = async () => {
    if (!user) {
      return;
    }

    try {
      const userExists = await fb.userExists(user.uid).once("value");
      if (!userExists.val()) {
        createUser(user);
      }
    } catch (e) {
      console.log("Big error!", e);
    }

    setLoggedIn(user);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.oncontextmenu = function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      };
    }
  }, []);

  return (
    <>
      <AnimatedBackground />
      <Global styles={[globalStyles]} />
      <ContainApp>
        <AnimatePresence exitBeforeEnter>
          {loading ? (
            <Loading key="loading" />
          ) : user && user.uid ? (
            <>
              <Root key="root" />
              <Navigation key="navi" />
            </>
          ) : (
            <Login key="login" />
          )}
        </AnimatePresence>
      </ContainApp>
      <Notifications />
      <Decoration>
        <DecorationGraphic />
      </Decoration>
    </>
  );
}

const Decoration = styled.div({
  position: "fixed",
  bottom: -5,
  right: -5,
  zIndex: -1,
  transform: "scale(4)",
  opacity: 0.6
});

const globalStyles = {
  html: {
    height: "100%"
  },
  body: {
    fontFamily: "Rubik",
    padding: 0,
    margin: 0,
    color: ds.colors.black,
    width: "100%",
    display: "flex",

    background: "linear-gradient(180deg, #393746 0%, #454154 100%)",

    textShadow: "1px 1px 1px rgba(0,0,0,0.004)",
    textRendering: "optimizeLegibility !important",
    WebkitFontSmoothing: "antialiased !important",
    fontSize: ds.sizes.default,
    height: "100%",
    overflowX: "hidden",
    overflowY: "auto"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  small: {
    color: ds.colors.grey
  },
  button: {
    fontFamily: "Verdana"
  },
  h4: {
    ...ds.headings.h4
  },
  "#root": {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    width: "100%"
  }
};

export default App;
