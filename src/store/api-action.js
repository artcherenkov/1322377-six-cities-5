import {setCityOffers, loadHotels} from "./action";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadHotels(data)))
    .then(() => dispatch(setCityOffers()))
);
