import React, { Component } from "react";

class Counter extends Component {
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

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div className="container my-5">
        <div className="card text-center my-5 shadow border border-4">
          <div className="card-body">
            <h1 className="text-primary fw-bold ">Counter App</h1>
            <div className="my-5">
              <h2 className="my-5 text-primary fw-bold">{this.state.count}</h2>
              <button
                className="btn btn-success mx-3 increment"
                onClick={this.increment}
              >
                Increment
              </button>
              <button
                className="btn btn-danger mx-3 increment"
                onClick={this.decrement}
                disabled={this.state.count === 0}
              >
                Decrement
              </button>
              <button
                className="btn btn-secondary mx-3 increment"
                onClick={this.reset}
                disabled={this.state.count === 0}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
