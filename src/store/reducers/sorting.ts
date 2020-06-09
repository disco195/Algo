/**
 *
 * Initial State Used in \
 * Sorting Module
 *
 */
const initialState: SortingModuleState = {
  module: "SORTING_MODULE",
  type: "BUBBLE",
  dataSet: Array.from({ length: Math.floor(Math.random() * 50) }).map(() => {
    return Math.floor(Math.random() * 500);
  }),
};

export function sortingReducer(
  state = initialState,
  action: { type: SORTING_MODULE | SORTING_TYPE | SORTING_ACTIONS }
) {
  switch (action.type) {
    /**
     *
     * Set Initial State Module
     *
     */
    case "SORTING_MODULE":
      return initialState;

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

    /**
     *
     * Module Actions
     *
     */
    case "CREATE_RANDOM":
      return { ...state, currentSet: "" };

    case "CREATE_USER_DEFINED":
      return { ...state, currentSet: "" };

    case "SORT_SET":
      return { ...state, currentSet: "" };

    default:
      return state;
  }
}
