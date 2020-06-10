import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles, Theme, Typography } from "@material-ui/core";

function Navigation(props: Navigation) {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h5">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Algo
          </Link>
        </Typography>
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

const mapStateToProps = (state: CombinedState) => {
  return {
    module: state.rootReducer.module,
  };
};

export default connect(mapStateToProps)(Navigation);
