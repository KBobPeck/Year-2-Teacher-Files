import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import SingleMovie from "./Pages/SingleMovie";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies/:id" children={<SingleMovie />} />
    </Switch>
  );
}

export default App;
