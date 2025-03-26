import React, { Component } from "react";

function example() {
  console.log("hi from example func");
}

export default class About extends Component {
  state = { color: "black", backgroundColor: "white", username: "John Doe", age: 777, toggle: false }; 

  myFunc() {
    console.log("hello world");
  }

  render() {
    this.myFunc();
    example();

    console.log("the props obj in About: ", this.props);
    //destructuring the props object:
    //const { count, greeting } = this.props;
    console.log(this.state);
    return (
      <div
        className="comp-box"
        style={{
          color: this.state.color,
          backgroundColor: this.state.backgroundColor,
        }}
      >
        About:
        {this.props.count}
        <h5> {this.props.greeting} {this.state.username} </h5>

        <div>
          colors:
          <br />
          <button onClick={() => this.setState({ color: "red" })}>red</button>
          <button onClick={() => this.setState({ color: "green" })}>green</button>
          <button onClick={() => this.setState({ color: "blue" })}>blue</button>
          <button onClick={() => this.setState({ color: "black" })}>black</button>
          <button onClick={() => this.setState({ color: "white" })}>white</button>
        </div>

        <div>
          background colors:
          <br />
          <button onClick={() => this.setState({ backgroundColor: "red" })}>red</button>
          <button onClick={() => this.setState({ backgroundColor: "green" })}>green</button>
          <button onClick={() => this.setState({ backgroundColor: "blue" })}>blue</button>
          <button onClick={() => this.setState({ backgroundColor: "black" })}>black</button>
          <button onClick={() => this.setState({ backgroundColor: "white" })}>white</button>
        </div>

      </div>
    );
  }
}
