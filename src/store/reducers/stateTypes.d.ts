interface CombinedState {
  generalReducer: GeneralState;
}

interface GeneralState {
  currentModule: MODULES;
  DS_Type: DS_TYPE;
}
