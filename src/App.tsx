// Dependecies
import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import { Homepage, SortingModule } from "./containers";

import { Navigation } from "./components";

export default () => {
  /**
   * JSX
   */
  return (
    <Fragment>
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/sorting" render={() => <SortingModule />} />
      </Switch>
    </Fragment>
  );
};
