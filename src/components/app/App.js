import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from '../header/Header';
import {RandomPlanet} from '../swСomponents/random';
import PeoplePage from '../pages/PeoplePage';
import PlanetsPage from '../pages/PlanetsPage';
import StarshipsPage from '../pages/StarshipsPage';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import SwapiService from '../../services/swapiService';
// import dummySwapiService from '../../services/dummySwapiService';
import { SwapiServiceProvider } from '../serviceСontext/swapiServiceСontext';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <div className="app">
        <div className="container">
          <ErrorBoundary>
            <SwapiServiceProvider value={this.swapiService}>
              <Header/>
              <main>
                <RandomPlanet/>

                <Switch>
                  <Route 
                    path="/" 
                    exact 
                    render={() => <h2>Welcome to Star Wars DB</h2>}/>
                  <Route path="/people">
                    <PeoplePage/>
                  </Route>
                  <Route path="/planets">
                    <PlanetsPage/>
                  </Route>
                  <Route path="/starships">
                    <StarshipsPage/>
                  </Route>
                </Switch>
              </main>
            </SwapiServiceProvider>
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}
