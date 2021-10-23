import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import WorkExperience from "./components/WorkExperience";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/Portfolio" component={Home} />
          <Route path="/Portfolio/WorkExperience" component={WorkExperience} />
          <Route path="/Portfolio/projects" component={Portfolio} />
          <Route path="/Portfolio/contact" component={Contact} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
