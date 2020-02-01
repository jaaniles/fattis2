import React from "react";
import styled from "@emotion/styled";

import Land from "../assets/Land";

const Container = styled.div({
  position: "fixed",
  bottom: -4,

  zIndex: -1
});

const World = () => (
  <Container>
    <Land />
  </Container>
);

export default World;
