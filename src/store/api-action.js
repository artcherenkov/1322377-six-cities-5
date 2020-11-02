import {loadHotels, loadComments} from "./action";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadHotels(data)))
);

export const fetchCommentsList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadComments(data)))
);
