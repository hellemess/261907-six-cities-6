import App from './components/app/app';
import cities from './mocks/cities';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore} from 'redux';
import offers from './mocks/offers';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {reducer} from './store/reducer';
import reviews from './mocks/reviews';

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App
        cities={cities}
        offers={offers}
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
