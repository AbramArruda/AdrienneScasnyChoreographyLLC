import React, { Component } from "react";
import Logo from "../../images/Logos/LOGO_B.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md justify-content-left" id="navbar">
        <div>
          <Link
            class="nav-link"
            to={process.env.PUBLIC_URL + "/"}
            id="logoLink"
          >
            <img src={Logo} id="fullImage" />
          </Link>
        </div>
        <ul class="nav" id="linkContainer">
          <li class="nav-item">
            <Link
              class="nav-link underline"
              to={process.env.PUBLIC_URL + "/AboutMe"}
              id="aboutLink"
            >
              Bio
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link underline"
              to={process.env.PUBLIC_URL + "/Works"}
              id="worksLink"
            >
              My Work
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link underline"
              to={process.env.PUBLIC_URL + "/Services"}
              id="worksLink"
            >
              Services
            </Link>
          </li>
          <li class="nav-item">
            <Link
              class="nav-link underline"
              to={process.env.PUBLIC_URL + "/Contact"}
              id="contactLink"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
