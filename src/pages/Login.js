import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { Card } from "../components/StyledComponents";
import { login } from "../utils/api";

function Login({ onSuccess }) {
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (userName, password, rememberMe) => {
    /* Here is where all the login logic will go. Upon clicking the login button, we would like to utilize a login method that will send our entered credentials over to the server for verification. Once verified, it should store your token and send you to the protected route. */
    login(userName, password)
      .then(res => {
        if (!res.token) {
          throw new Error("token was not received");
        }
        setError(null);
        onSuccess(res.token, rememberMe);
        setLoggedIn(true);
      })
      .catch(e => {
        setError(e.message);
      });
  };

  if (loggedIn) {
    return <Redirect to="/contacts" />;
  }

  return (
    <Card>
      <AuthForm error={error} onConfirm={handleLogin} btnMessage="Log in" />
      <Link to="/signup">Don't have an account?</Link>
    </Card>
  );
}

export default Login;
