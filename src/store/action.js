export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  GET_CITY_OFFERS: `GET_CITY_OFFERS`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`
};

export const ActionCreator = {
  changeCity: (newCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: newCity,
  }),

  getOffersList: () => ({
    type: ActionType.GET_OFFERS
  }),

  getCityOffers: () => ({
    type: ActionType.GET_CITY_OFFERS
  }),

  changeSortType: (newSortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: newSortType
  }),

  changeActiveOffer: (newActiveOffer) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER,
    payload: newActiveOffer
  })
};
