import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PetPage from './pages/PetPage';
import MarketPage from './pages/MarketPage';
import HomePage from './pages/HomePage';

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/market'} component={MarketPage} />
        <Route exact path={'/pet'} component={PetPage} />
      </Switch>
    </BrowserRouter>
  );
}
