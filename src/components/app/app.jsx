import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {cityType} from '../city/city.prop';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Main from '../main/main';
import NotFound from '../not-found/not-found';
import Offer from '../offer/offer';
import {offerItemType} from '../offer-item/offer-item.prop';
import PropTypes from 'prop-types';
import React from 'react';
import {reviewItemType} from '../review-item/review-item.prop';

const App = ({cities, offers, reviews}) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Main cities={cities} offers={offers} />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/favorites" exact>
        <Favorites offers={offers} />
      </Route>
      <Route path="/offer/:id" render={({match}) => {
        const id = match.params.id;

        return <Offer currentId={id} offers={offers} reviews={reviews} />;
      }} exact />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  cities: PropTypes.arrayOf(cityType),
  offers: PropTypes.arrayOf(offerItemType),
  reviews: PropTypes.arrayOf(reviewItemType)
};

export default App;
