import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
    debugger;
    logout();
    handleTokenUpdate();
  };

  useEffect(() => {
    console.log("app.js use effectt");
    handleTokenUpdate();
  }, []);

  return (
    <Router>
      <div>
        <Header
          onLogout={handleLogout}
          username={tokenConfirm && tokenConfirm.username}
        ></Header>
        <Route exact path="/" component={Login} />

        <Route
          path="/login"
          render={props => (
            <Login onLoginSuccess={handleTokenUpdate} {...props} />
          )}
        />

        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/contacts" component={Contacts} />
      </div>
    </Router>
  );
}

export default App;
