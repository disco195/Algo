// Dependecies
import React from "react";
import { Switch, Route } from "react-router-dom";

// Main Components
import { Homepage, SortModule } from "./pages";

export default () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/sorting" render={() => <SortModule />} />
      </Switch>
    </div>
  );
};
