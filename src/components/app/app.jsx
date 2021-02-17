import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Main from '../main/main';
import NotFound from '../not-found/not-found';
import Offer from '../offer/offer';
import PropTypes from 'prop-types';
import React from 'react';

const App = ({ids, offersCount}) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Main ids={ids} offersCount={offersCount} />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/favorites" exact>
        <Favorites />
      </Route>
      <Route path="/offer/:id" exact>
        <Offer />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  ids: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  offersCount: PropTypes.number.isRequired
};

export default App;
