import { createStore, combineReducers } from "redux";

import { reducers } from "./reducers";

export const store = createStore(
  reducers,
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
