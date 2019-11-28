import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./PrivateRoute";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import { AuthContext } from "./context/auth";

function App(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = data => {
    localStorage.setItem("tokens", JSON.stringify(data)); // TODO: if 'remember me'
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/contacts" component={Contacts} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
