import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CounterApp from "./Components/CounterAppFunction/CounterApp";
import CounterAppClass from './Components/CounterAppClass/CounterAppClass';

import Home from "./Components/Home/Home";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/counter-app-function">
            <CounterApp title="Counter App Function"/>
          </Route>
          <Route path="/counter-app-class">
            <CounterAppClass />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
