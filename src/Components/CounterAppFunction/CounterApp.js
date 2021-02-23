import React, { useState } from "react";
import "./CounterApp.css";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

import ImgFunction from "../Img/function.jpg";

import { Button } from "@material-ui/core";

const CounterApp = (props) => {
  const [count, setCount] = useState(0);

  const increment = (step) => () => setCount(count + step);

  const { title } = props;

  return (
    <>
      <div>
        <NavLink to="/">
          <Button variant="contained" color="secondary">
            Voltar
          </Button>
        </NavLink>
      </div>
      <div className="counter-app">
        <h1>{title}</h1>
        <h3 className="value">{count}</h3>
        <div className="btn-count">
          <Button variant="contained" color="primary" onClick={increment(1)}>
            Increment ++
          </Button>
        </div>
        <div className="btn-count">
          <Button variant="contained" color="secondary" onClick={increment(-1)}>
            Decrement --
          </Button>
        </div>
      </div>
      <div className="img-class">
        <img src={ImgFunction} alt="" />
      </div>
    </>
  );
};

CounterApp.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CounterApp;
