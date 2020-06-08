import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

export function SortModule() {
  const classes = useStyles();

  return <div className={classes.root}></div>;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));
