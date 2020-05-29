import { AnyAction, Dispatch } from "redux";

interface Sort {
  state: {
    set: ValueBar[];
    sorting: boolean;
    sorted: boolean;
  };
  dispatch: Dispatch<AnyAction>;
}

interface SetContainer {
  set: Sort["state"]["set"];
}

interface ValueBar {
  height: number;
  width: number;
  value: number;
  active: boolean;
}

type ACTION_TYPES = "CREATE_SET" | "SORT_STEP";
type CREATE_OPTIONS = "RANDOM" | "USER_DEFINED";
type SORT_TYPE =
  | "BUBBLE"
  | "SELECTION"
  | "INSERTION"
  | "MERGE"
  | "QUICK"
  | "RANDOM_QUICK"
  | "COUNTING"
  | "RADIX";
