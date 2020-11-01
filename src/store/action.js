export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  GET_CITY_OFFERS: `GET_CITY_OFFERS`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
  LOAD_OFFERS: `LOAD_OFFERS`,
};

export const changeCity = (newCity) => ({
  type: ActionType.CHANGE_CITY,
  payload: newCity,
});

export const getOffersList = () => ({
  type: ActionType.GET_OFFERS,
});

export const getCityOffers = () => ({
  type: ActionType.GET_CITY_OFFERS,
});

export const changeSortType = (newSortType) => ({
  type: ActionType.CHANGE_SORT_TYPE,
  payload: newSortType,
});

export const changeActiveOffer = (newActiveOffer) => ({
  type: ActionType.CHANGE_ACTIVE_OFFER,
  payload: newActiveOffer,
});

export const loadHotels = (hotels) => ({
  type: ActionType.LOAD_OFFERS,
  payload: hotels,
});
