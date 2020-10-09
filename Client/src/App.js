import React, { useState, useEffect } from "react";
import Welcome from "./components/Welcome.js";
import Grid from "./components/Grid.jsx";
import Projects from "./components/Projects.jsx";
import SearchSuggest from "./components/searchSuggestions.jsx";

import { Animated } from "react-animated-css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {

  return (
    <div className="wrap">
      <Router>
        <SearchSuggest />
        <Switch>
          <div>
            <Route path="/projects"><Projects/></Route>
            <Route path="/pics"><Grid/></Route>
            <Route path="/sharity"><Projects projectNamefromRouter={"Sharity"}/></Route>
            <Route path="/landescape"><Projects projectNamefromRouter={"Landescape"}/></Route>
            <Route path="/prrget"><Projects projectNamefromRouter={"Prrget"}/></Route>
            <Route path="/" exact>
              <Animated animationOut="fadeOut" isVisible={true}>
                <Welcome />
              </Animated>
            </Route>
          </div>
        </Switch>
        <SearchSuggest />
      </Router>
    </div>
  );
};

export default App;
