import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0
  };

  incr = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <button onClick={this.incr}>I was clicked {this.state.count}</button>
    );
  }
}

export default App;
