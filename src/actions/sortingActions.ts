import { SORTING_METHODS, SORTING_ACTIONS } from "../store/actionTypes";

export function initializeSortingModule() {
  return { type: "SORTING_MODULE" };
}

export function sortingMethod(method: SORTING_METHODS) {
  return { type: method };
}

export function SortingActions(action: SORTING_ACTIONS) {
  return { type: action };
}
