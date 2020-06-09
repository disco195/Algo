export function initializeSortingModule() {
  return { type: "SORTING_MODULE" };
}

export function sortingMethod(method: SORTING_TYPE) {
  return { type: method };
}

export function SortingActions(action: SORTING_ACTIONS) {
  return { type: action };
}
