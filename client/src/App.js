import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";
import Works from "./Pages/Works";

class App extends Component {
  render() {
    return (
      <div id="contentWrapper">
        <Router>
          <div>
            <Switch>
              <Route
                exact
                path={process.env.PUBLIC_URL + "/"}
                component={HomePage}
              />
              <Route
                path={process.env.PUBLIC_URL + "/AboutMe"}
                component={AboutMe}
              />
              <Route
                path={process.env.PUBLIC_URL + "/Contact"}
                component={Contact}
              />
              <Route
                path={process.env.PUBLIC_URL + "/Works"}
                component={Works}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
