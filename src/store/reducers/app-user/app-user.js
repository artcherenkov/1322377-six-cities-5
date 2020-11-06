import {extend} from "../../../utils/common";
import {ActionType} from "../../action";
import {AuthStatus} from "../../../const";

const initialState = {
  authStatus: AuthStatus.NO_AUTH,
  username: ``
};

const appUser = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_AUTH_STATUS:
      return extend(state, {
        authStatus: action.payload
      });
    case ActionType.SET_USER_NAME:
      return extend(state, {
        username: action.payload
      });
  }

  return state;
};

export {appUser};
