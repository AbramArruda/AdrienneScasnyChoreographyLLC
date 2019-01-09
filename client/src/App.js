import React, { Component } from "react";
import logo from "./logo.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Dance Choreographer</p>
        </header>
      </div>
    );
  }
}

export default App;
