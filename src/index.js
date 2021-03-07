import App from './components/app/app';
import cities from './mocks/cities';
import offers from './mocks/offers';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <App
      cities={cities}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
