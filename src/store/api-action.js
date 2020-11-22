import {
  loadHotels,
  loadComments,
  changeAuthStatus,
  redirectToRoute,
  pushRouteToRedirect,
  loadCityOfferComments,
  setCityOffers, toggleOfferToFavorite, loadFavoriteOffers,
} from "./action";
import {AuthStatus} from "../const";
import {getRouteToRedirect} from "./reducers/app-state/selectors";
import {adaptCommentsToClient} from "../core/adapter/comments";
import {getOffers} from "./reducers/app-data/selectors";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadHotels(data)))
);

export const fetchCommentsList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadComments(data)))
);

export const fetchCityOffersCommentsList = () => (dispatch, getState, api) => {
  const ids = getOffers(getState()).reduce((acc, offer) => [...acc, offer.id], []);
  const promises = ids.reduce((acc, id) => {
    acc = [...acc, api.get(`/comments/${id}`)];
    return acc;
  }, []);
  Promise.all(promises)
    .then((res) => {
      const result = res.reduce((acc, {data}, i) => {
        acc = Object.assign({}, acc, {[ids[i]]: data.map((offer) => adaptCommentsToClient(offer))});
        return acc;
      }, {});
      dispatch(loadCityOfferComments(result));
      dispatch(setCityOffers());
    });
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(changeAuthStatus(AuthStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(changeAuthStatus(AuthStatus.AUTH)))
    .then(() => {
      const state = getState();
      const route = getRouteToRedirect(state);
      dispatch(redirectToRoute(route));
      dispatch(pushRouteToRedirect(``));
    })
);

export const postComment = ({comment, rating}, id, submitBtnRef) => (dispatch, getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
    .then(({data}) => dispatch(loadComments(data)))
    .then(() => (submitBtnRef.disabled = false))
);

export const fetchFavoritesList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(loadFavoriteOffers(data)))
);

export const toggleToFavorite = (hotelId, status) => (dispatch, getState, api) => (
  api.post(`/favorite/${hotelId}/${status}`)
    .then(({data}) => dispatch(toggleOfferToFavorite(data)))
    .then(() => dispatch(fetchFavoritesList()))
);
