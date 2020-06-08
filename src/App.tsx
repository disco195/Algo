// Dependecies
import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import { Sort } from "./containers";
import Navbar from "./components/Navbar";

export default () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Sort />} />
      </Switch>
    </Fragment>
  );
};
