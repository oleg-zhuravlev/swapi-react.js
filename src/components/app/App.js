import React, {Component} from 'react';
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

                <PeoplePage/>
                <PlanetsPage/>
                <StarshipsPage/>

              </main>
            </SwapiServiceProvider>
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}
