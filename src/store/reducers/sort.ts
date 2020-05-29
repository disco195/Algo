import { SORT_ACTIONS as ACTIONS } from "../actionTypes";
import { functions } from "../../common/";

const initialState: SortState = {
  set: functions.makeSet(functions.randomSet()),
  sorted: false,
};

export const sortReducer = (
  state = initialState,
  action: Action
): SortState => {
  switch (action.type) {
    case "CREATE_SET":
      if (action.payload) return { ...state, set: action.payload };

    case "SORT_SET":
      return { ...state, sorted: true };

    default:
      return state;
  }
};

type Action = { type: ACTIONS; payload?: SortState["set"] };
