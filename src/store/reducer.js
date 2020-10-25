import {extend} from "../utils/common";
import {Cities, SortType} from "../const";
import {ActionType} from "./action";
import {getCityOffers} from "../core";
import {generateOffers} from "../mock/offers";

const OFFERS_COUNT = 40;
const DEFAULT_CITY = Cities.AMSTERDAM;
const DEFAULT_SORT_TYPE = SortType.POPULAR;

const mockOffers = generateOffers(OFFERS_COUNT);

const initialState = {
  city: DEFAULT_CITY,
  cityOffers: getCityOffers(mockOffers, DEFAULT_CITY),
  offers: mockOffers,
  sortType: DEFAULT_SORT_TYPE,
  activeOfferId: ``
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

    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {
        sortType: action.payload
      });

    case ActionType.CHANGE_ACTIVE_OFFER:
      return extend(state, {
        activeOfferId: action.payload
      });
  }

  return state;
};

export {reducer};
