import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./PrivateRoute";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import { logout, getConfirm } from "./utils/AuthHelperMethods";

function App() {
  const [tokenConfirm, setTokenConfirm] = useState(null);

  const handleTokenUpdate = () => {
    setTokenConfirm(getConfirm());
  };

  const handleLogout = () => {
    logout();
    handleTokenUpdate();
  };

  useEffect(() => {
    console.log("app.js use effectt");
    handleTokenUpdate();
  }, []);

  return (
    <React.Fragment>
      <Header
        onLogout={handleLogout}
        username={tokenConfirm && tokenConfirm.username}
      ></Header>

      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route
              path="/login"
              render={props => (
                <Login onSuccess={handleTokenUpdate} {...props} />
              )}
            />
            <Route
              path="/signup"
              render={props => (
                <Signup onSuccess={handleTokenUpdate} {...props} />
              )}
            />
            <PrivateRoute path="/contacts" component={Contacts} />
            <Route
              render={props => (
                <Login onLoginSuccess={handleTokenUpdate} {...props} />
              )}
            />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
