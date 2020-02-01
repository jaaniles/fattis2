import React, { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import useOutsideClick from "../../hooks/useOutsideClick";

import * as ds from "../../design";

const Container = styled(motion.div)({
  borderBottom: `1px solid ${ds.colors.lightBlue}`,
  position: "relative",
  display: "flex",

  marginBottom: "1.5em",

  "> *": {
    padding: "0 1.5em 0.5em 0"
  }
});

const InputStyle = styled.input({
  background: "none",
  border: "none",
  width: "100%",

  color: ds.colors.fire,
  outline: "none",
  fontSize: ds.sizes.m,

  "&:focus": {
    outline: 0,
    boxShadow: 0
  },
  "::placeholder": {
    color: "transparent"
  }
});

const InputLabel = styled(motion.label)({
  position: "absolute",
  left: 0,
  userSelect: "none",
  color: ds.colors.grey,
  transformOrigin: "top left"
});

const FocusBorder = styled(motion.span)({
  position: "absolute",
  bottom: -1,
  height: 1,
  padding: 0,
  background: ds.colors.fire
});

const variants = {
  initial: {},
  filled: {}
};

const EnhancedInput = ({ label = "label", id, value, onChange, password }) => {
  const [focus, setFocus] = useState(false);
  const input = useOutsideClick(() => {
    setFocus(false);
  });

  return (
    <Container
      animate={value || focus ? "filled" : "initial"}
      variants={variants}
      onTap={() => setFocus(true)}
      ref={input}
    >
      <InputLabel
        variants={{
          initial: {
            top: "20%",
            y: "-20%",
            scale: 1,
            opacity: 1
          },
          filled: {
            top: "-50%",
            y: "0%",
            scale: 0.8,
            opacity: 0.6
          }
        }}
        htmlFor={id}
      >
        {label}
      </InputLabel>
      <InputStyle
        id={id}
        type={password ? "password" : "text"}
        value={value}
        onChange={onChange}
      />
      <FocusBorder
        variants={{
          initial: {
            left: "50%",
            width: "0%"
          },
          filled: {
            left: "0%",
            width: "100%"
          }
        }}
      />
    </Container>
  );
};

export default EnhancedInput;
