// Dependecies
import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import { SortModule } from "./containers";

import { Navigation } from "./components";

export default () => {
  /**
   * JSX
   */
  return (
    <Fragment>
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <SortModule />} />
      </Switch>
    </Fragment>
  );
};
