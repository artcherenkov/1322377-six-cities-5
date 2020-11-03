import {extend} from "../../../utils/common";
import {ActionType} from "../../action";
import {AuthStatus} from "../../../const";

const initialState = {
  authStatus: AuthStatus.NO_AUTH
};

const appUser = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_AUTH_STATUS:
      return extend(state, {
        authStatus: action
      });
  }

  return state;
};

export {appUser};
