import App from './components/app/app';
import {nanoid} from 'nanoid';
import React from 'react';
import ReactDOM from 'react-dom';

const Setting = {
  CARDS_COUNT: 5,
  OFFERS_COUNT: 108
};

const ids = [];

for (let i = 0; i < Setting.CARDS_COUNT; i++) {
  ids.push(nanoid());
}

ReactDOM.render(
    <App
      ids={ids}
      offersCount={Setting.OFFERS_COUNT}
    />,
    document.querySelector(`#root`)
);
