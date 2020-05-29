//@ts-nocheck
// Types
import { ACTION_TYPES, CREATE_OPTIONS } from "../types/sort/common";

// Functions
import { randomSet, makeSet } from "../functions/";

/**
 *
 * Create Set - Action Creator with payload
 *
 */
export const createSet = (option: CREATE_OPTIONS, payload?: number[]) => {
  const type: ACTION_TYPES = "CREATE_SET";
  switch (option) {
    case "RANDOM":
      return { type, payload: makeSet(randomSet(payload)) };

    case "USER_DEFINED":
      return { type, payload: makeSet(payload) };

    default:
      return { type, payload: makeSet(randomSet(payload)) };
  }
};

export function sortSet() {
  const type: ACTION_TYPES = "SORT_STEP";
  return { type };
}
