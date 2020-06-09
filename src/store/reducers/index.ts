import { combineReducers } from "redux";

// reducers
import { sortingReducer } from "./sorting";

const initialState: State = {
  module: null,
};

function rootReducer(state = initialState, action: SET_RESET_STATE) {
  switch (action.type) {
    case "RESET_STATE":
      return initialState;

    default:
      return state;
  }
}

export const reducers = combineReducers({ rootReducer, sortingReducer });
