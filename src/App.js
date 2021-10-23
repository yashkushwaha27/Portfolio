import React from "react";
import { Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route path="/Portfolio" exact component={Home} />
          <Route path="/Portfolio/WorkExperience" component={WorkExperience} />
          <Route path="/Portfolio/projects" component={Portfolio} />
          <Route path="/Portfolio/contact" component={Contact} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
