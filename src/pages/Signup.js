import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { Card } from "../components/StyledComponents";
import { signup } from "../utils/api";

function Signup({ onSuccess }) {
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignup = (userName, password, rememberMe) => {
    //create a new user and pass on server
    signup(userName, password)
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
      <AuthForm error={error} onConfirm={handleSignup} btnMessage="Sign up" />
      <Link to="/login"> Have an account already?</Link>
    </Card>
  );
}

export default Signup;
