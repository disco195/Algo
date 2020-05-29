import { AnyAction, Dispatch } from "redux";

interface Sort {
  state: {
    set: ValueBar[];
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
