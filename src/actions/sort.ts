import { randomSet, makeSet } from "../common/functions";
import {
  SORT_ACTIONS as ACTIONS,
  SORT_CREATE_OPTIONS as OPTIONS,
} from "../store/actionTypes";

export function createSet(option: OPTIONS, payload?: number[]) {
  const type: ACTIONS = "CREATE_SET";

  switch (option) {
    case "RANDOM":
      return { type, payload: makeSet(randomSet()) };

    case "USER_DEFINED":
      if (payload) return { type, payload: makeSet(payload) };

    default:
      return { type, payload: makeSet(randomSet()) };
  }
}

export function sortSet() {
  const type: ACTIONS = "SORT_SET";
  return { type };
}
