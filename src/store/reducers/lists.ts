const initialState: ListsState = {
  listType: "SINGLY",
};

export function listsReducer(
  state = initialState,
  action: LIST_TYPE_ACTION
): ListsState {
  switch (action.type) {
    case "SINGLY":
      return { ...initialState, listType: "SINGLY" };

    case "DOUBLY":
      return { ...initialState, listType: "DOUBLY" };

    case "STACK":
      return { ...initialState, listType: "STACK" };

    case "QUEUE":
      return { ...initialState, listType: "QUEUE" };

    case "DEQUE":
      return { ...initialState, listType: "DEQUE" };

    default:
      return state;
  }
}
