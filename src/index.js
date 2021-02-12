import App from './components/app/app';
import React from 'react';
import ReactDOM from 'react-dom';

const Setting = {
  OFFERS_COUNT: 108
};

ReactDOM.render(
    <App
      offersCount={Setting.OFFERS_COUNT}
    />,
    document.querySelector(`#root`)
);
