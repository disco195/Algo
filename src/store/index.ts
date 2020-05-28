import { createStore } from "redux";
import { sortReducer } from "./reducers/sort";

export const store = createStore(sortReducer);
