/**
 *
 * Initial State Used in \
 * Sorting Module
 *
 */
const initialState: SortingModuleState = {
  type: "BUBBLE",
  dataSet: Array.from({ length: Math.floor(Math.random() * 50) }).map(() => {
    return Math.floor(Math.random() * 500);
  }),
  isSorted: false,
};

export function sortingReducer(state = initialState, action: SET_SORTING_ALGO) {
  switch (action.type) {
    /**
     *
     * Sorting Methods
     *
     */
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

    case "QUICK_RANDOM":
      return { ...state, sortType: "QUICK_RANDOM" };

    case "RADIX":
      return { ...state, sortType: "RADIX" };

    default:
      return state;
  }
}
