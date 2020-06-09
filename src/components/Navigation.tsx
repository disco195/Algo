import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Theme, Typography, Button } from "@material-ui/core";

import { AbbrButton } from "./";

export function Navigation() {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h5">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Algo
          </Link>
        </Typography>

        <div style={{ margin: "0 0 0 50px" }}>
          <AbbrButton value={"BUBBLE"} abbr="BBL" active={false} />
          <AbbrButton value={"BUBBLE"} abbr="BBL" active={false} />
          <AbbrButton value={"BUBBLE"} abbr="BBL" active={true} />
          <AbbrButton value={"BUBBLE"} abbr="BBL" active={false} />
          <AbbrButton value={"BUBBLE"} abbr="BBL" active={false} />
          <AbbrButton value={"BUBBLE"} abbr="BBL" active={false} />
        </div>
      </div>
    </nav>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "8vh",
    backgroundColor: "black",
  },
  container: {
    width: "85%",
    height: "100%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
  },
}));
