import App from './components/app/app';
import offers from './mocks/offers';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <App
      offers={offers}
    />,
    document.querySelector(`#root`)
);
