import {combineReducers} from "redux";
import {appState} from "./app-state/app-state";
import {appData} from "./app-data/app-data";
import {appUser} from "./app-user/app-user";

export const Namespace = {
  DATA: `DATA`,
  STATE: `STATE`,
  USER: `USER`
};

export default combineReducers({
  [Namespace.DATA]: appData,
  [Namespace.STATE]: appState,
  [Namespace.USER]: appUser
});
