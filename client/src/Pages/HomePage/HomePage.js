import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import "./HomePage.css";
import TextLoop from "react-text-loop";
import Footer from "../../Components/Footer";
import Animation from "../../Components/Animation";

export default class HomePage extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row" id="homeTextDiv">
          <div class="col-sm-12 col-lg-7">
            <h1 id="homeText">
              {" "}
              <Fade cascade left duration={1500} delay={500}>
                Hi, I'm Abram Arruda
              </Fade>
              <Fade cascade duration={1500} delay={1700}>
                <h3 id="homeText2">
                  <TextLoop
                    springConfig={{ stiffness: 40, damping: 30 }}
                    speed={8000}
                    children={[
                      "web developer",
                      "problem solver",
                      "biologist",
                      "soccer player",
                      "lifelong learner"
                    ]}
                  />
                </h3>
              </Fade>
            </h1>
          </div>
          <div class="col-sm-12 col-lg-5" id="homeImage">
            <Animation />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
