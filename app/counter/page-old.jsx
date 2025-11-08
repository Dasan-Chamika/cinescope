"use client";

import { Component } from "react";

// Old Method
// Define a class component that extends React.Component or React.PureComponent
class Counter extends Component {
  // Define constructor if necessary
  constructor(props) {
    super(props);
    // Initialize state if needed
    this.state = {
      count: 0,
    };
  }

  // Define lifecycle methods if necessary
  componentDidMount() {
    // Code to run after the component is mounted
    console.log("Component Mounted !");
  }

  componentDidUpdate(prevProps, prevState) {
    // Check if the data has changed
    if (prevState.count !== this.state.count) {
      // Data has changed, perform additional actions
      console.log("Count has been updated:", this.state.count);
    }
  }

  // Define instance methods if necessary
  handleClick = () => {
    // Update state or perform other logic
    this.setState({ count: this.state.count + 1 });
  };

  // Define render() method to return JSX
  render() {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <p>Count: {this.state.count}</p>
        <button
          onClick={this.handleClick}
          className="border border-primary py-1 px-2 text-sm rounded-2xl"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
