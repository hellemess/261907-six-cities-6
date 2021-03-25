export const ActionType = {
  CHANGE_CITY: `app/changeCity`,
  GET_OFFERS: `app/getOffers`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffers: (offers) => ({
    type: ActionType.GET_OFFERS,
    payload: offers
  })
};
