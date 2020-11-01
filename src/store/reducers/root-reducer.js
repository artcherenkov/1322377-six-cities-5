import {combineReducers} from "redux";
import {appState} from "./app-state/app-state";
import {appData} from "./app-data/app-data";

export const Namespace = {
  DATA: `DATA`,
  STATE: `STATE`,
};

export default combineReducers({
  [Namespace.DATA]: appData,
  [Namespace.STATE]: appState,
});
