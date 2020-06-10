import { combineReducers } from "redux";

const initialState: GeneralState = {
  currentModule: null,
  DS_Type: null,
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

export const reducers = generalReducer;
