import {loadHotels, loadComments, changeAuthStatus, redirectToRoute, pushRouteToRedirect} from "./action";
import {AuthStatus} from "../const";
import {getRouteToRedirect} from "./reducers/app-state/selectors";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadHotels(data)))
);

export const fetchCommentsList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadComments(data)))
);

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
