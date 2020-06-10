// Dependecies
import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

//
//  Containers
//
import { Homepage, Sorting, Lists } from "./containers";

export default () => {
  /**
   * JSX
   */
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/sorting" render={() => <Sorting />} />
        <Route exact path="/lists" render={() => <Lists />} />
      </Switch>
    </Fragment>
  );
};
