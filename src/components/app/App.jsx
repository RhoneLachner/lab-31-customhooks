import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import VillagerListHome from '../containers/VillagerListHome';
import VillagerByIdDetails from '../containers/VillagerByIdDetails';
import Header from '../headers/Header';
import  { ThemeProvider } from '../state/themeContext';

export default function App() {

  return (
    <>
      
      <div className="main">
        <Router>
          <ThemeProvider>
            <Header/> 
            <Switch>
        
              <Route
                path="/"
                exact
                component = { VillagerListHome }
              />
              <Route
                path="/details/:_id"
                exact
                component = { VillagerByIdDetails }
              />
           
            </Switch>
          </ThemeProvider>
        </Router>
      </div>
      
    </>
  );
}
