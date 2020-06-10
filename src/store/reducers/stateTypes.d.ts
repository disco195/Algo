interface CombinedState {
  generalReducer: GeneralState;
}

interface GeneralState {
  currentModule: MODULES;
  DS_Type: DS_TYPE;
}

interface SortingState {
  sortType: SORT_TYPE;
}

interface ListsState {
  listType: LIST_TYPE;
}
