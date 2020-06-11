type MODULES = null | "SORTING" | "LISTS";
type MODULES_ACTION = { type: MODULES };

type SORT_TYPE =
  | "BUBBLE"
  | "SELECTION"
  | "INSERTION"
  | "MERGE"
  | "QUICK"
  | "QUICK RANDOM"
  | "RADIX"
  | "COUNTING";
type SORT_TYPE_ACTION = { type: SORT_TYPE };
type SORT_CREATE_RANDOM = "SORT_CREATE_RANDOM";
type SORT_CREATE_USER_DEFINED = "SORT_CREATE_USER_DEFINED";
type SORT_SORT_SET = "SORT_SORT_SET";
type SORTING_ACTIONS =
  | { type: SORT_CREATE_RANDOM | SORT_SORT_SET }
  | { type: SORT_CREATE_USER_DEFINED; payload: number[] };

type LIST_TYPE = "SINGLY" | "DOUBLY" | "STACK" | "QUEUE" | "DEQUE";
type LIST_TYPE_ACTION = { type: LIST_TYPE };

type DS_TYPE = SORT_TYPE | LIST_TYPE | null;
type DS_TYPE_ACTION = { type: DS_TYPE };
