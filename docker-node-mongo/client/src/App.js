import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    posts: [],
    name: ""
  };
  componentDidMount() {
    axios
      .get("/items")
      .then(res => {
        console.log(res.data);
        this.setState({
          posts: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      name: e.target.value
    });
  };
  _handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.name, "hello");
    axios.post("/item/add", {
      name: "new name"
    });
  };
  render() {
    return (
      <div className="App">
        <form onSubmit={this._handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <input type="submit" value="add Post" />
        </form>
        {this.state.posts.map(post => {
          return <h3>{post.name}</h3>;
        })}
      </div>
    );
  }
}

export default App;
