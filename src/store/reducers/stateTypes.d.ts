interface CombinedState {
  generalReducer: GeneralState;
  sortReducer: SortingState;
  listsReducer: ListsState;
}

interface GeneralState {
  currentModule: MODULES;
}

interface SortingState {
  sortType: SORT_TYPE;
  currentSet: number[] | null;
}

interface ListsState {
  listType: LIST_TYPE;
}
