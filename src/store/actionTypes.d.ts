type MODULES = null | "SORTING" | "LISTS";
type MODULES_ACTION = { type: MODULES };

type SORT_TYPE = "BUBBLE" | "SELECTION";
type SORT_TYPE_ACTION = { type: SORT_TYPE };

type DS_TYPE = SORT_TYPE | null;
