import {Cities} from "../const";

const DEFAULT_CITY = Cities.AMSTERDAM;

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_CITY_OFFERS: `SET_CITY_OFFERS`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
  LOAD_OFFERS: `LOAD_OFFERS`,
};

export const changeCity = (newCity) => ({
  type: ActionType.CHANGE_CITY,
  payload: newCity,
});

export const setCityOffers = (city = DEFAULT_CITY) => ({
  type: ActionType.SET_CITY_OFFERS,
  payload: city
});

export const changeSortType = (newSortType) => ({
  type: ActionType.CHANGE_SORT_TYPE,
  payload: newSortType,
});

export const changeActiveOffer = (newActiveOffer) => ({
  type: ActionType.CHANGE_ACTIVE_OFFER,
  payload: newActiveOffer.toString(),
});

export const loadHotels = (hotels) => ({
  type: ActionType.LOAD_OFFERS,
  payload: hotels,
});
