import React, { Component } from "react";
import Profile from "./Profile";
import ProfileContainer from "./ProfileContainer";
import WarblerContainer from "./WarblerContainer";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <Switch>
          <Route path="/profile" component={ProfileContainer} />
          <Route path="/warblers" component={WarblerContainer} />
        </Switch>
      </div>
    );
  }
}

export default Home;
