import {extend} from "../utils/common";
import {Cities} from "../const";
import {ActionType} from "./action";

const initialState = {
  city: Cities.AMSTERDAM,
  offers: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });

    case ActionType.GET_OFFERS_LIST:
      return extend(state, {
        offers: action.payload
      });
  }

  return state;
};

export {reducer};
