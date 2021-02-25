import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Main from '../main/main';
import NotFound from '../not-found/not-found';
import Offer from '../offer/offer';
import {offersValidation} from '../../validation';
import React from 'react';

const App = ({offers}) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Main offers={offers} />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/favorites" exact>
        <Favorites offers={offers} />
      </Route>
      <Route path="/offer/:id" render={({match}) => {
        const id = match.params.id;
        const offer = offers.find((offer) => offer.id === id);

        return <Offer offer={offer} />;
      }} exact />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = offersValidation;

export default App;
