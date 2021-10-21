import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Test1 from "./Test1";
import Test2 from "./Test2";

const Loader = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Test1 />
      </Route>
      <Route exact path="/test2">
        <Test2 />
      </Route>
    </Switch>
  );
};

export default Loader;
