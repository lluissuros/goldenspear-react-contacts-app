import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import logoImg from "../img/logo_goldenspear.jpg";
import {
  Card,
  Logo,
  Form,
  Input,
  Button,
  Error
} from "../components/StyledComponents";
import { login } from "../utils/api"; //TODO: use postLogin later
import { setToken } from "../utils/AuthHelperMethods";

function Login({ onLoginSuccess }) {
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    /* Here is where all the login logic will go. Upon clicking the login button, we would like to utilize a login method that will send our entered credentials over to the server for verification. Once verified, it should store your token and send you to the protected route. */
    login(userName, password)
      .then(res => {
        if (!res.token) {
          throw new Error("token was not received");
        }
        setToken(res.token);
        setError(null);
        setLoggedIn(true);
        onLoginSuccess();
      })
      .catch(e => {
        setError(e.message);
      });
  };

  if (loggedIn) {
    debugger;
    return <Redirect to="/contacts" />;
  }

  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={() => handleLogin()}>Log In</Button>
        <Button onClick={() => console.log("TODO")}>Remember Me</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
      {error && <Error>{`error message: ${error} `}</Error>}
    </Card>
  );
}

export default Login;
