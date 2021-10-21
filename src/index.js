import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from "./Loader";
ReactDOM.render(
  <Router>
    <Loader />
  </Router>,
  document.getElementById("root")
);
