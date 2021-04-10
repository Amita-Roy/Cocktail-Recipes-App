import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CocktailListPage from '../../pages/cocktailListPage/CocktailListPage';
import Navigation from '../navigation/Navigation';
import CocktailPage from '../../pages/cocktailPage/CocktailPage';

import './App.css';

const App = () => (
  <div className="App">
    <div className="header">
      <Navigation />
    </div>
    <Switch>
      <Route path="/" exact component={CocktailListPage} />
      <Route path="/cocktails/:id" exact component={CocktailPage} />
    </Switch>
  </div>
);

export default App;
