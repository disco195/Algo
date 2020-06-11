const initialState: SortingState = {
  sortType: "BUBBLE",
  currentSet: null,
};

export function sortReducer(
  state = initialState,
  action: SORT_TYPE_ACTION | SORTING_ACTIONS
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

    case "SORT_CREATE_RANDOM":
      return {
        ...state,
        currentSet: Array.from({
          length: Math.round(Math.random() * 50),
        }).map(() => Math.round(Math.random() * 5000)),
      };

    case null:
      return { ...state, currentSet: null };

    default:
      return state;
  }
}
