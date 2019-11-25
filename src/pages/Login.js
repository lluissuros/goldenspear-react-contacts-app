import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import logoImg from "../img/logo.jpeg";
import {
  Card,
  Logo,
  Form,
  Input,
  Button,
  Error
} from "../components/AuthForms";
import { useAuth } from "../context/auth";
import { postLogin, postLoginMock } from "../utils/api";

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  const handleLogin = () => {
    postLoginMock(userName, password)
      .then(result => {
        console.log("mock token returned", result);
        setAuthTokens(result.data);
        setLoggedIn(true);
        setError(null);
      })
      .catch(e => {
        setError(e.message);
      });
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Card>
      <Logo src={logoImg} />
      <p>Use user: goldspear and password: password</p>
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
        <Button onClick={() => handleLogin()}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
      {error && <Error>{`error message: ${error} `}</Error>}
    </Card>
  );
}

export default Login;
