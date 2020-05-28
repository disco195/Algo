import { randomSet } from "../common/functions";
import {
  SORT_ACTIONS as ACTIONS,
  SORT_CREATE_OPTIONS as OPTIONS,
} from "../store/actionTypes";

export function createSet(option: OPTIONS, payload?: number[]) {
  const type: ACTIONS = "CREATE_SET";

  switch (option) {
    case "RANDOM":
      return { type, payload: randomSet() };

    case "USER_DEFINED":
      if (payload) return { type, payload };

    default:
      return { type, payload: randomSet() };
  }
}

export function sortSet() {
  const type: ACTIONS = "SORT_SET";
  return { type };
}
