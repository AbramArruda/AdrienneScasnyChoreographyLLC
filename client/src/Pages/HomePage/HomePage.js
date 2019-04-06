import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import "./HomePage.css";
import Footer from "../../Components/Footer";

export default class HomePage extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row" id="homeTextDiv">
          <div class="col-sm-12 col-lg-7">
            <h1 id="homeText">
              {" "}
              <Fade cascade left duration={1500} delay={500}>
                Adrienne Scasny
              </Fade>
              <Fade cascade duration={1500} delay={1700}>
                <h3 id="homeText2" />
              </Fade>
            </h1>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
