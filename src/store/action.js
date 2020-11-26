import {Cities} from "../const";

const DEFAULT_CITY = Cities.AMSTERDAM;

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_CITY_OFFERS: `SET_CITY_OFFERS`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_ALL_COMMENTS: `LOAD_ALL_COMMENTS`,
  CHANGE_AUTH_STATUS: `CHANGE_AUTH_STATUS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_USER_NAME: `SET_USER_NAME`,
  PUSH_ROUTE_TO_REDIRECT: `PUSH_ROUTE_TO_REDIRECT`,
  TOGGLE_OFFER_TO_FAVORITE: `TOGGLE_OFFER_TO_FAVORITE`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  LOAD_OFFERS_NEARBY: `LOAD_OFFERS_NEARBY`
};

export const changeCity = (newCity) => ({
  type: ActionType.CHANGE_CITY,
  payload: newCity,
});

export const setCityOffers = (city = DEFAULT_CITY) => ({
  type: ActionType.SET_CITY_OFFERS,
  payload: city
});

export const toggleOfferToFavorite = (offer) => ({
  type: ActionType.TOGGLE_OFFER_TO_FAVORITE,
  payload: offer
});

export const loadFavoriteOffers = (offers) => ({
  type: ActionType.LOAD_FAVORITE_OFFERS,
  payload: offers
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

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments
});

export const loadCityOfferComments = (comments) => ({
  type: ActionType.LOAD_ALL_COMMENTS,
  payload: comments
});

export const changeAuthStatus = (authStatus) => ({
  type: ActionType.CHANGE_AUTH_STATUS,
  payload: authStatus
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const setUserName = (username) => ({
  type: ActionType.SET_USER_NAME,
  payload: username,
});

export const pushRouteToRedirect = (route) => ({
  type: ActionType.PUSH_ROUTE_TO_REDIRECT,
  payload: route,
});

export const loadOffersNearby = (offerId) => ({
  type: ActionType.LOAD_OFFERS_NEARBY,
  payload: offerId,
});
