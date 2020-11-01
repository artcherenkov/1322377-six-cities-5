import {extend} from "../../../utils/common";
import {Cities, SortType} from "../../../const";
import {ActionType} from "../../action";

const DEFAULT_CITY = Cities.AMSTERDAM;
const DEFAULT_SORT_TYPE = SortType.POPULAR;

const initialState = {
  city: DEFAULT_CITY,
  sortType: DEFAULT_SORT_TYPE,
  activeOfferId: ``
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
  }

  return state;
};

export {appState};
