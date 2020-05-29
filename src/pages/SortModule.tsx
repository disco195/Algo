// Types
import { SortModule } from "../types/sort/common";
import { Dispatch } from "redux";
// Dependencies
import React, { useState } from "react";
import { connect } from "react-redux";
// Functions
import { extractSet } from "../functions/";
// Components
import { SetContainer } from "../components/sort";
// Action Creators
import { createSet, sortSet } from "../actions/sort";

function Module(props: SortModule) {
  const [value, setValue] = useState("");

  return (
    <div>
      <SetContainer />
      <div>
        <div>
          <p>Create</p>
          <button onClick={() => props.dispatch(createSet("RANDOM"))}>
            Random
          </button>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.dispatch(createSet("USER_DEFINED", extractSet(value)));
            }}
          >
            <input
              type="text"
              name="numbers-array"
              placeholder="Comma separated numbers"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button>Custom</button>
          </form>
          <button onClick={() => props.dispatch(sortSet())}>Sort</button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch): SortModule => {
  return { dispatch };
};

export default connect(null, mapDispatchToProps)(Module);
