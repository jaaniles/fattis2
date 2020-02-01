import React, { useContext } from "react";
import styled from "@emotion/styled";
import { AnimatePresence } from "framer-motion";

import Notification from "./Notification";
import { AppContext } from "../../Provider";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  position: "fixed",
  right: 0,
  bottom: "25vh",
  height: "100vh",
  width: "65vw",
  maxWidth: 200,
  marginRight: "0.5em"
});

const Notifications = () => {
  const { notifications, removeNotification } = useContext(AppContext);

  return (
    <Container>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <AnimatePresence initial={false}>
          {notifications.map(n => (
            <Notification
              key={n.id}
              n={n}
              removeNotification={removeNotification}
            />
          ))}
        </AnimatePresence>
      </ul>
    </Container>
  );
};

export default Notifications;
