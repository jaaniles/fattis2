import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Notification = ({ n, removeNotification }) => (
  <NotificationStyle
    positionTransition
    initial={{ opacity: 0, y: 50, scale: 0.3 }}
    animate={{
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { ease: [0.68, -0.55, 0.265, 1.55] }
    }}
    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
  >
    {n.content}
    <CloseButton close={() => removeNotification(n.id)} />
  </NotificationStyle>
);

const NotificationStyle = styled(motion.li)({
  position: "relative",
  minHeight: 45,
  maxWidth: "100%",
  background: "#AB96FF",
  color: "white",

  fontSize: 18,

  padding: "6px 30px 6px 8px",

  borderTopLeftRadius: 6,
  borderTopRightRadius: 6,
  borderBottomLeftRadius: 6,
  margin: "0.25em"
});

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="hsl(0, 0%, 35%)"
    strokeLinecap="round"
    {...props}
  />
);

export const CloseButton = ({ close }) => (
  <button
    onClick={close}
    style={{
      position: "absolute",
      top: 10,
      right: 0,
      background: "none",
      border: "none"
    }}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path d="M 3 16.5 L 17 2.5" />
      <Path d="M 3 2.5 L 17 16.346" />
    </svg>
  </button>
);

export default Notification;
