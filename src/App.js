import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";

function App(props) {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts Page</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/contacts" component={Contacts} />
      </div>
    </Router>
  );
}

export default App;
