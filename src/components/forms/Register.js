import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import Input from "./Input";
import Button from "../ui/Button";

const Content = styled(motion.div)({
  flex: 1,

  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",

  button: {
    letterSpacing: "0.125em"
  }
});

const Register = ({ cancel, setReady }) => (
  <Content
    variants={{
      initial: {
        opacity: 0
      },
      open: {
        opacity: 1
      },
      ready: {
        opacity: 0
      }
    }}
  >
    <Input label="email" />
    <Input label="password" password />
    <Input label="confirm password" password />
    <Button solid big onClick={setReady}>
      Ready to Join!
    </Button>
    <Button onClick={cancel}>Cancel</Button>
  </Content>
);

export default Register;
