import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { makeStyles, Theme } from "@material-ui/core";

import { NavGroup } from "./";

interface NavigationProps {
  currentModule: MODULES;
}

function Navigation(props: NavigationProps) {
  useEffect(() => {});

  const classes = useStyles(props);

  return (
    <nav className={classes.root}>
      <div className={classes.container}>
        <span style={{ margin: "0 20px 0 0" }}>Algo</span>
        <NavGroup />
      </div>
    </nav>
  );
}
//
//
// Styling
//
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "8vh",
    width: "100%",
    color: "white",
    backgroundColor: "black",
  },
  container: {
    height: "100%",
    width: "80%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
  },
}));

//
//  Redux Connect
//
const mapStateToProps = (state: GeneralState) => ({
  currentModule: state.currentModule,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

//
//  Export with props
//
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
