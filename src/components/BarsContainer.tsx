import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Bar } from "./";

export function BarsContainer(props: BarsContainer) {
  const classes = useStyles(props);
  return <div className={classes.root}>{getBars(props.values)}</div>;
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

function getBars(arr: number[]) {
  const max = Math.max(...arr) + 5;
  const count = arr.length + 1;
  const props = arr.map((value) => {
    return {
      height: (value / max) * 100,
      width: (1 / (count + 1)) * 100,
      value,
    };
  });

  return props.map((props) => {
    return <Bar {...props} />;
  });
}
