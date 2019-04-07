import React, { Component } from "react";
import Navbar from "../../Components/Navbar";
import "./Services.css";

export default class Services extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <Navbar />
            <h1 class="display-4">Fluid jumbotron</h1>
            <p class="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
