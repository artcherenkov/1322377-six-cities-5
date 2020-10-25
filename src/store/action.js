export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  GET_CITY_OFFERS: `GET_CITY_OFFERS`
};

export const ActionCreator = {
  changeCity: (newCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: newCity,
  }),
  getOffersList: () => ({
    type: ActionType.GET_OFFERS,
  }),
  getCityOffers: () => {
    return ({
      type: ActionType.GET_CITY_OFFERS
    });
  }
};
