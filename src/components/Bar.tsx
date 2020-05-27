import React from "react";
import { makeStyles } from "@material-ui/styles";

export default (props: Bar) => {
  const classes = useStyles(props);

  return <div className={classes.root}></div>;
};

const useStyles = makeStyles({
  root: {
    height: (props: Bar) => `${props.height}%`,
    width: (props: Bar) => `${props.width}%`,
    backgroundColor: "red",
  },
});
