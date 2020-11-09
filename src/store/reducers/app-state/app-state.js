import {extend} from "../../../utils/common";
import {Cities, SortType} from "../../../const";
import {ActionType} from "../../action";

const DEFAULT_CITY = Cities.AMSTERDAM;
const DEFAULT_SORT_TYPE = SortType.PRICE_HIGH_TO_LOW;

const initialState = {
  city: DEFAULT_CITY,
  sortType: DEFAULT_SORT_TYPE,
  activeOfferId: ``,
  routeToRedirect: ``
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });

    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {
        sortType: action.payload
      });

    case ActionType.CHANGE_ACTIVE_OFFER:
      return extend(state, {
        activeOfferId: action.payload
      });

    case ActionType.PUSH_ROUTE_TO_REDIRECT:
      return extend(state, {
        routeToRedirect: action.payload
      });
  }

  return state;
};

export {appState};
