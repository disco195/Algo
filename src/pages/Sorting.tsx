import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { SortContainer } from "../components";
import { createSet, sortSet } from "../actions/sort";

function Sorting(props: Sorting) {
  console.log(props.dispatch);
  return (
    <div>
      <SortContainer />
      <div>
        <div>
          <p>Create</p>
          <button onClick={() => props.dispatch(createSet("RANDOM"))}>
            Random
          </button>
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
