import {ActionType} from './action';
import cities from '../mocks/cities';
import offers from '../mocks/offers';

const initialState = {
  city: cities[0],
  offers
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };
    case ActionType.GET_OFFERS:
      return {
        ...state,
        offers: action.payload
      };
    default:
      return state;
  }
};
