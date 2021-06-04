import React from "react";
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './Main'

import Nav from "./components/Nav";
import Line from "./components/Line";
import Maindish from "./Maindish";

function App() {
  return (
    <div>
      <Router>
        <Nav></Nav>
        <Line></Line>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/maindish" component={Maindish}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
