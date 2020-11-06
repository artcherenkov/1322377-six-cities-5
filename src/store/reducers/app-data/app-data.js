import {extend} from "../../../utils/common";
import {ActionType} from "../../action";
import {getCityOffers} from "../../../core/core";
import {adaptOffersToClient} from "../../../core/adapter/offers";
import {adaptCommentsToClient} from "../../../core/adapter/comments";

const initialState = {
  offers: [],
  cityOffers: [],
  comments: []
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

    case ActionType.SET_CITY_OFFERS:
      return extend(state, {
        cityOffers: getCityOffers(state.offers, action.payload)
      });
  }

  return state;
};

export {appData};
