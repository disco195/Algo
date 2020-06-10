import { combineReducers } from "redux";

const initialState: GeneralState = {
  currentModule: null,
  DS_Type: null,
};

function generalReducer(state = initialState, action: any) {
  return state;
}

export const reducers = generalReducer;
