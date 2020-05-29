// Types
import { ValueBar as Props } from "../../types/sort/common";
// Dependencies
import React from "react";
import { makeStyles } from "@material-ui/core";

/**
 *
 * Value Representational
 * Component as a Bar
 *
 */
export default (props: Props) => {
  // Styling
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <p className={classes.text}>{props.value}</p>
    </div>
  );
};

// JSS Styling
const useStyles = makeStyles({
  root: {
    height: (props: Props) => `${props.height}%`,
    width: (props: Props) => `${props.width}%`,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: (props: Props) => (props.active ? "green" : "red"),
  },
  text: {
    margin: "5px 0",
    color: "black",
  },
});
