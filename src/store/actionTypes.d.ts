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

type LIST_TYPE = "SINGLY" | "DOUBLY" | "STACK" | "QUEUE" | "DEQUE";
type LIST_TYPE_ACTION = { type: LIST_TYPE };

type DS_TYPE = SORT_TYPE | LIST_TYPE | null;
type DS_TYPE_ACTION = { type: DS_TYPE };
