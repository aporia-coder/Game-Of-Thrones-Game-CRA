import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path exact="/" component={Landing} />
          <Route path="/quiz" component={Quiz} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
