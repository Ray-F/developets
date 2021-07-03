import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PetPage from './pages/PetPage';
import MarketPage from './pages/MarketPage';
import HomePage from './pages/HomePage';
import InventoryPage from './pages/InventoryPage';

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/pet'} component={PetPage} />
        <Route exact path={'/market'} component={MarketPage} />
        <Route exact path={'/inventory'} component={InventoryPage} />
        {/* Default path if nothing matches */}
        <Route path={'/'} component={PetPage} />
      </Switch>
    </BrowserRouter>
  );
}
