import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../containers/Home';
import Details from '../containers/Details';
import Header from '../headers/Header';

export default function App() {

  return (
    <>
      
      <div className="main">
        <Router>
          <Header/> 
          <Switch>
        
            <Route
              path="/"
              exact
              component = { Home }
            />
            <Route
              path="/details/:_id"
              exact
              component = { Details }
            />
           
          </Switch>
        </Router>
      </div>
      
    </>
  );
}
