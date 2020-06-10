import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { setModule } from "../actions/general";
import { Link } from "react-router-dom";

function Homepage({ setModule }: HomepageProps) {
  useEffect(() => {
    setModule();
  });
  return (
    <div>
      <Link to="/sorting">Sorting</Link>
    </div>
  );
}

//
// Redux Bindings
//
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setModule: () => dispatch(setModule(null)),
  };
};

export default connect(null, mapDispatchToProps)(Homepage);
