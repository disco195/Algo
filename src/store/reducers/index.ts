import { combineReducers } from "redux";

// actions
import { RESET_STATE } from "../actionTypes";

// reducers
import { sortingReducer } from "./sorting";

const initialState = {};

function rootReducer(state = initialState, action: { type: RESET_STATE }) {
  switch (action.type) {
    case "RESET_STATE":
      return {};
    default:
      return state;
  }
}

export const reducers = combineReducers({ rootReducer, sortingReducer });
