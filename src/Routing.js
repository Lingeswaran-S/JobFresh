import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import JobList from "./components/JobList";
import Read from "./components/Read";

function Routing() {
  return (
    <div class="container ">
      <Router>
        <button class="btn btn-success mt-3 shadow-lg ">
          <Link to="/home">
            <strong class="text-white">Companies</strong>
          </Link>
        </button>
        <Route path="/home" component={JobList}></Route>
        <Route path="/read" component={Read}></Route>
      </Router>
    </div>
  );
}

export default Routing;
