import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core";
import { setModule } from "../actions";

interface ListsProps {
  setModule: () => void;
}

function Lists(props: ListsProps) {
  useEffect(() => {
    props.setModule();
  });

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
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setModule: () => dispatch(setModule("LISTS")),
});

//
//  Export with props
//
export default connect(mapStateToProps, mapDispatchToProps)(Lists);
