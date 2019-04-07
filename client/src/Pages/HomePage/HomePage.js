import React, { Component } from "react";
import Navbar from "../../Components/Navbar";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid" id="homeBackground">
          <div class="container-fluid">
            <Navbar />
            <h1 class="display-4" id="homeText">
              Hello, <br /> I'm Adrienne Scasny
            </h1>
            <p class="lead" />
          </div>
        </div>
      </div>
    );
  }
}
