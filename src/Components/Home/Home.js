import { Button } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="container-home">
      <h2>HOME</h2>
      <h4>It's the same, but there is a difference in the source code</h4>

      <NavLink to="/counter-app-function">
        <Button variant="outlined" color="primary">
          <h4>Counter App Function</h4>
        </Button>
      </NavLink>

      <NavLink to="/counter-app-class">
        <Button variant="outlined" color="secondary">
          <h4>Counter App Class</h4>
        </Button>
      </NavLink>
    </div>
  );
}

export default Home;
