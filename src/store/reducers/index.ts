import { combineReducers } from "redux";
import { sortReducer } from "./sorting";
import { listsReducer } from "./lists";

const initialState: GeneralState = {
  currentModule: null,
};

function generalReducer(
  state = initialState,
  action: MODULES_ACTION
): GeneralState {
  switch (action.type) {
    case "SORTING":
      return { ...initialState, currentModule: "SORTING" };

    case "LISTS":
      return { ...initialState, currentModule: "LISTS" };

    case null:
      return { ...initialState, currentModule: null };

    default:
      return state;
  }
}

export const reducers = combineReducers({
  generalReducer,
  sortReducer,
  listsReducer,
});
