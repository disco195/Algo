// Dependecies
import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Modules
import { Sorting } from "./module/Sorting";

export default () => {
  /**
   * JSX
   */
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Sorting />} />
      </Switch>
    </Fragment>
  );
};
