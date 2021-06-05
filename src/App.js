import React from "react";
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './Main'

import Nav from "./components/Nav";
import Line from "./components/Line";

import Maindish from "./pages/Maindish";
import Baking from "./pages/Baking";
import Box from "./pages/Box";
import Chinese from "./pages/Chinese";
import Diet from "./pages/Diet";
import Flour from "./pages/Flour";
import Korean from "./pages/Korean";
import Mix from "./pages/Mix";
import Relish from "./pages/Relish";
import Sidedish from "./pages/Sidedish";
import Simple from "./pages/Simple";
import Snack from "./pages/Snack";
import Special from "./pages/Special";
import Vege from "./pages/Vege";
import Welcome from "./pages/Welcome";
import Weston from "./pages/Weston";



function App() {
  return (
    <div>
      <Router>
        <Nav></Nav>
        <Line></Line>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/maindish" component={Maindish}/>
          <Route path="/sidedish" component={Sidedish}/>
          <Route path="/snack" component={Snack}/>
          <Route path="/simple" component={Simple}/>
          <Route path="/welcome" component={Welcome}/>
          <Route path="/vege" component={Vege}/>
          <Route path="/korean" component={Korean}/>
          <Route path="/weston" component={Weston}/>
          <Route path="/special" component={Special}/>
          <Route path="/chinese" component={Chinese}/>
          <Route path="/mix" component={Mix}/>
          <Route path="/flour" component={Flour}/>
          <Route path="/relish" component={Relish}/>
          <Route path="/baking" component={Baking}/>
          <Route path="/diet" component={Diet}/>
          <Route path="/box" component={Box}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
