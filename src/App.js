import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Track from "./pages/Track";
import CoffeePlaceList from "./pages/CoffeePlaceList";
import MainHeader from './components/MainHeader';

function App() {
  return (
      <div className="App">
        <MainHeader/>
        <Router>
          <Switch>

            <Route exact path="/place/:id">
              <Track />
            </Route>
            <Route path="/list">
              <CoffeePlaceList />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
