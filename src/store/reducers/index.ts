import { RESET_STATE } from "../actionTypes";

const initialState = {};

export function rootReducer(
  state = initialState,
  action: { type: RESET_STATE }
) {
  switch (action.type) {
    case "RESET_STATE":
      return {};
    default:
      return state;
  }
}
