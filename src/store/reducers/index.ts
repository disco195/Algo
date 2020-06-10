import { combineReducers } from "redux";

// reducers
import { sortingReducer } from "./sorting";

export const initialState: State = {
  module: null,
};

function rootReducer(state = initialState, action: SET_MODULE): State {
  switch (action.type) {
    case null:
      return { ...initialState, module: null };

    case "SORTING_MODULE":
      return { ...initialState, module: "SORTING_MODULE" };

    case "LISTS_MODULE":
      return { ...initialState, module: "LISTS_MODULE" };

    case "TREES_MODULE":
      return { ...initialState, module: "TREES_MODULE" };

    default:
      return state;
  }
}

export const reducers = combineReducers({ rootReducer, sortingReducer });
