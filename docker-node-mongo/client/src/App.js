import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    axios
      .get("/api/items")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return <div className="App">Hello World</div>;
  }
}

export default App;
