import {createSelector} from "reselect";

export const getOffers = (state) => state.DATA.offers;
export const getCityOffers = (state) => state.DATA.cityOffers;
export const getComments = createSelector(
    (state) => state.DATA.comments,
    (comments) => comments
);
