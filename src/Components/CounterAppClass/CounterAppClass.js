import React from "react";
import "../CounterAppFunction/CounterApp.css";

import { NavLink } from 'react-router-dom';

import ImgClass from '../Img/class.jpg'

import { Button } from "@material-ui/core";

export class CounterAppClass extends React.Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
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
          <h1>Counter App Class</h1>
          <h3 className="value">{this.state.count}</h3>
          <div className="btn-count">
            <Button
              variant="contained"
              color="primary"
              onClick={this.increment}
            >
              Increment ++
            </Button>
          </div>
          <div className="btn-count">
            <Button
              variant="contained"
              color="secondary"
              onClick={this.decrement}
            >
              Decrement --
            </Button>
          </div>
        </div>
        <div className="img-class">
          <img src={ImgClass} alt="" />
        </div>
        
      </>
    );
  }
}

export default CounterAppClass;
