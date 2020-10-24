import {extend} from "../utils/common";
import {Cities} from "../const";
import {ActionType} from "./action";
import {getCityOffers} from "../core";
import {generateOffers} from "../mock/offers";

const OFFERS_COUNT = 40;
const DEFAULT_CITY = Cities.AMSTERDAM;

const mockOffers = generateOffers(OFFERS_COUNT);

const initialState = {
  city: DEFAULT_CITY,
  cityOffers: getCityOffers(mockOffers, DEFAULT_CITY),
  offers: mockOffers
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload
      });

    case ActionType.GET_CITY_OFFERS:
      return extend(state, {
        cityOffers: getCityOffers(state.offers, state.city)
      });
  }

  return state;
};

export {reducer};
