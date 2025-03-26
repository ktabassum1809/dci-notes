import React, { Component } from "react";

export default class Products extends Component {
  state = { products: [], username: "John Doe" }; 

  //a custom method to change the username to "Jo"
  clickHandler() {
    //fetching products data on click:
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => this.setState({ products: data }));

    //changing the username to 'Jo':
    this.setState({ username: "Jo" });
  }

  //life cycle hook from react class component to run a code when the component is mounted:
  componentDidMount() {
    console.log("component did mount");

    //     fetch('https://fakestoreapi.com/products')
    //             .then(res=>res.json())
    //             .then(data=> this.setState({products: data}) )
  }

  //life cycle hook from react class component to run a code when the component is updated:
  componentDidUpdate(prevProps, prevState) {
    console.log("component did update");
    if (this.state.username !== prevState.username) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => this.setState({ products: data }));
    }
  }

  //life cycle hook from react class component to run a code when the component is unmounted:
  componentWillUnmount() {
    console.log("component will unmount, bye bye");
  }

  render() {
    return (
      <div>
        Products:
        <br />
        username: <b> {this.state.username} </b> 
        {//important to use .bind(this) on any custom method we make (like clickHandler) to make 'this' defined within that method 
        }
        <button onClick={this.clickHandler.bind(this)}>change username</button>
        {this.state.products.map((x) => (
          <h5 key={x.id}> {x.title} </h5>
        ))}
      </div>
    );
  }
}
