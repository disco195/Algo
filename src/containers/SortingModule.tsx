import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { makeStyles, Theme } from "@material-ui/core";
import { setModule } from "../actions/general";

function SortingModule(props: any) {
  const classes = useStyles();

  useEffect(() => {
    props.setModule();
  });

  return <div className={classes.root}></div>;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setModule: () => dispatch(setModule("SORTING_MODULE")),
  };
};

export default connect(null, mapDispatchToProps)(SortingModule);
