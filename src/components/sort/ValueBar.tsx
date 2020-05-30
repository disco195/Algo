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
    width: "25px",
    margin: "0 5px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: (props: Props) => (props.active ? "#788878" : "#C0C2C9"),
  },
  text: {
    margin: "5px 0",
    color: "black",
  },
});
