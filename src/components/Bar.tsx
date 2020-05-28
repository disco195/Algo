import React from "react";
import { makeStyles } from "@material-ui/styles";

export default (props: Bar) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <p className={classes.text}>{props.value}</p>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    height: (props: Bar) => `${props.height}%`,
    width: (props: Bar) => `${props.width}%`,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "red",
  },
  text: {
    margin: "5px 0",
    color: "black",
  },
});
