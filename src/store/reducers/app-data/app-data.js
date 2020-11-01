import {extend} from "../../../utils/common";
import {ActionType} from "../../action";
import {getCityOffers} from "../../../core";
import {Cities} from "../../../const";

const DEFAULT_CITY = Cities.AMSTERDAM;

const initialState = {
  offers: [],
  cityOffers: getCityOffers([], DEFAULT_CITY)
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload
      });

    case ActionType.GET_CITY_OFFERS:
      console.log(getCityOffers(state.offers, action.payload));
      return extend(state, {
        cityOffers: getCityOffers(state.offers, action.payload)
      });
  }

  return state;
};

export {appData};
