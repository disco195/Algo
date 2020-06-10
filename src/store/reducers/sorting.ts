const initialState: SortingState = {
  sortType: "BUBBLE",
};

export function sortReducer(
  state = initialState,
  action: SORT_TYPE_ACTION
): SortingState {
  switch (action.type) {
    case "BUBBLE":
      return { ...state, sortType: "BUBBLE" };

    case "SELECTION":
      return { ...state, sortType: "SELECTION" };

    case "INSERTION":
      return { ...state, sortType: "INSERTION" };

    case "MERGE":
      return { ...state, sortType: "MERGE" };

    case "QUICK":
      return { ...state, sortType: "QUICK" };

    case "QUICK RANDOM":
      return { ...state, sortType: "QUICK RANDOM" };

    case "COUNTING":
      return { ...state, sortType: "COUNTING" };

    case "RADIX":
      return { ...state, sortType: "RADIX" };

    default:
      return state;
  }
}
