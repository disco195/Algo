const initialState: SortingState = {
  sortType: "BUBBLE",
};

export function sortReducer(
  state = initialState,
  action: SORT_TYPE_ACTION
): SortingState {
  switch (action.type) {
    case "BUBBLE":
      return { ...initialState, sortType: "BUBBLE" };

    case "COUNTING":
      return { ...initialState, sortType: "COUNTING" };

    case "RADIX":
      return { ...initialState, sortType: "RADIX" };

    case "COUNTING":
      return { ...initialState, sortType: "COUNTING" };

    default:
      return state;
  }
}
