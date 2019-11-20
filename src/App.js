import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import { AuthContext } from "./context/auth";

function App(props) {
  return (
    <AuthContext.Provider value={false}>
      <Router>
        <div>
          <ul>...</ul>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/contacts" component={Contacts} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
