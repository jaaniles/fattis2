import React, { useState } from "react";
import { withRouter } from "react-router";

import Input from "./Input";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const Login = ({ blur, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = e => {
    e.preventDefault();

    /*
    if (!email) {
      return;
    }
    */

    console.log("ok!", history);
    history.push("main");
  };

  return (
    <motion.form
      initial="initial"
      animate={blur ? "blur" : "initial"}
      variants={{
        initial: {
          opacity: 1
        },
        blur: {
          opacity: 0.2
        }
      }}
    >
      <Input
        id="login_email"
        label={"Email"}
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        id="password"
        password
        label={"Password"}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button onClick={doLogin} type="submit">
        Sign In
      </Button>
    </motion.form>
  );
};

export default withRouter(Login);
