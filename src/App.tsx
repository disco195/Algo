import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import { Homepage, Sorting } from "./pages";

export default () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/sorting" render={() => <Sorting />} />
      </Switch>
    </div>
  );
};
