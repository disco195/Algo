import React, { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { SortContainer } from "../components";
import { createSet, sortSet } from "../actions/sort";
import { functions } from "../common";
function Sorting(props: Sorting) {
  const [value, setValue] = useState("");

  return (
    <div>
      <SortContainer />
      <div>
        <div>
          <p>Create</p>
          <button onClick={() => props.dispatch(createSet("RANDOM"))}>
            Random
          </button>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const arr = functions.extractDefinedValues(value);
              props.dispatch(createSet("USER_DEFINED", arr));
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

const mapDispatchToProps = (dispatch: Dispatch): Sorting => {
  return {
    dispatch,
  };
};

export default connect(null, mapDispatchToProps)(Sorting);
