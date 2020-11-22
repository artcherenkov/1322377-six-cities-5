import {extend} from "../../../utils/common";
import {ActionType} from "../../action";
import {getCityOffers, updateFavoriteOffers} from "../../../core/core";
import {adaptOffersToClient} from "../../../core/adapter/offers";
import {adaptCommentsToClient} from "../../../core/adapter/comments";

const initialState = {
  offers: [],
  cityOffers: [],
  comments: [],
  allComments: [],
  favorites: []
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload.map((offer) => adaptOffersToClient(offer))
      });

    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload.map((comment) => adaptCommentsToClient(comment))
      });

    case ActionType.LOAD_ALL_COMMENTS:
      return extend(state, {
        allComments: action.payload,
        offers: state.offers.map((offer) => Object.assign({}, offer, {
          commentsLength: action.payload[offer.id].length
        }))
      });

    case ActionType.SET_CITY_OFFERS:
      return extend(state, {
        cityOffers: getCityOffers(state.offers, action.payload)
      });

    case ActionType.LOAD_FAVORITE_OFFERS:
      return extend(state, {
        favorites: action.payload.map((offer) => adaptOffersToClient(offer))
      });

    case ActionType.TOGGLE_OFFER_TO_FAVORITE:
      const offers = state.offers.slice();
      let cityOffers = state.cityOffers.slice();

      const updatedOffers = updateFavoriteOffers(offers, action.payload);

      if (cityOffers.some((offer) => offer.id === action.payload.id)) {
        cityOffers = updateFavoriteOffers(cityOffers, action.payload);
      }

      return extend(state, {
        offers: updatedOffers,
        cityOffers
      });
  }

  return state;
};

export {appData};
