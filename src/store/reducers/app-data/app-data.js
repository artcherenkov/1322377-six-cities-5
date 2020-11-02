import {extend} from "../../../utils/common";
import {ActionType} from "../../action";
import {adaptOffersToClient, getCityOffers} from "../../../core";

const initialState = {
  offers: [],
  cityOffers: []
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload.map((offer) => adaptOffersToClient(offer))
      });

    case ActionType.SET_CITY_OFFERS:
      return extend(state, {
        cityOffers: getCityOffers(state.offers, action.payload)
      });
  }

  return state;
};

export {appData};
