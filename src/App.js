import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./PrivateRoute";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import { setToken, logout, getConfirm } from "./utils/AuthHelperMethods";

function App() {
  const [tokenConfirm, setTokenConfirm] = useState(null);

  const handleAuthSuccess = (token, rememberMe) => {
    setToken(token, rememberMe);
    setTokenConfirm(getConfirm());
  };

  const handleLogout = () => {
    logout();
    setTokenConfirm(getConfirm());
  };

  useEffect(() => {
    try {
      setTokenConfirm(getConfirm());
    } catch {
      logout();
    }
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
            <Route
              path="/login"
              render={props => (
                <Login onSuccess={handleAuthSuccess} {...props} />
              )}
            />
            <Route
              path="/signup"
              render={props => (
                <Signup onSuccess={handleAuthSuccess} {...props} />
              )}
            />
            <PrivateRoute path="/contacts" component={Contacts} />
            <Route
              render={props => (
                <Login onSuccess={handleAuthSuccess} {...props} />
              )}
            />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
