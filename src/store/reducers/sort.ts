import { SORT_ACTIONS as ACTIONS } from "../actionTypes";
import { functions } from "../../common/";

const initialState: State = {
  set: functions.randomSet(),
  sorted: false,
};

export const sortReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case "CREATE_SET":
      if (action.payload) return { ...state, set: action.payload };

    case "SORT_SET":
      return { ...state, sorted: true };

    default:
      return state;
  }
};

type State = { set: number[]; sorted: boolean };
type Action = { type: ACTIONS; payload?: number[] | never };
