import React from "react";
import { makeStyles } from "@material-ui/styles";

import { connect } from "react-redux";
import { createSet } from "../actions/sort";

function Container(props: SortContainer) {
  const classes = useStyles(props);
  console.log(props.set);
  return <div className={classes.root}>Sort Container</div>;
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "500px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});

const mapStateToProps = (state: SortState): SortContainer => {
  return { set: state.set };
};

export default connect(mapStateToProps)(Container);
