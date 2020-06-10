// Dependecies
import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

//
//  Containers
//
import { Homepage, Sorting, Lists } from "./containers";

//
//  Components
//
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
        <Route exact path="/sorting" render={() => <Sorting />} />
        <Route exact path="/lists" render={() => <Lists />} />
      </Switch>
    </Fragment>
  );
};
