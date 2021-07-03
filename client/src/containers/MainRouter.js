import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PetPage from './pages/PetPage';
import MarketPage from './pages/MarketPage';

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={PetPage} />
        <Route exact path={'/market'} component={MarketPage} />

        {/* Default path if nothing matches */}
        <Route path={'/'} component={PetPage} />
      </Switch>
    </BrowserRouter>
  );
}
