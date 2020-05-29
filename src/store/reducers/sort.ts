// Types
import { ACTION_TYPES, Sort } from "../../types/sort/common";
// Functions
import { makeSet, randomSet } from "../../functions";

const initialState: Sort["state"] = {
  set: makeSet(randomSet()),
  sorting: false,
  sorted: false,
};

export const sortReducer = (
  state = initialState,
  action: Action
): Sort["state"] => {
  switch (action.type) {
    case "CREATE_SET":
      if (action.payload) return { ...state, set: action.payload };

    case "SORT_STEP":
      return { ...state };

    default:
      return state;
  }
};

type Action = { type: ACTION_TYPES; payload?: Sort["state"]["set"] };
