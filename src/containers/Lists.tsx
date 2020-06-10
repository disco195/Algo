import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core";

interface ListsProps {}

function Lists(props: ListsProps) {
  const classes = useStyles(props);

  return <main className={classes.root}>Lists Container</main>;
}

//
// Styling
//
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "92vh",
    width: "100%",
  },
}));

//
//  Redux Connect
//
const mapStateToProps = (state: CombinedState) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

//
//  Export with props
//
export default connect(mapStateToProps, mapDispatchToProps)(Lists);
