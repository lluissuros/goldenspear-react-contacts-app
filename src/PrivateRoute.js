import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn, logout } from "./utils/AuthHelperMethods";

function PrivateRoute({ component: Component, ...rest }) {
  const hasToken = () => {
    try {
      const logged = isLoggedIn();
      console.log("private route is logged:", logged);
      return logged;
    } catch (err) {
      /* Looks like there's an error so we'll print it out and log the user out for security reasons. */
      console.log(err);
      console.log("logging out because of error");
      logout();
      return false;
    }
  };

  return (
    <Route
      {...rest}
      render={props =>
        hasToken() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
