import { createStore } from "redux";
import { sortReducer } from "./reducers/";

export const store = createStore(sortReducer);
