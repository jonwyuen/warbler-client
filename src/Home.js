import React, { Component } from "react";
import Profile from "./Profile";
import ProfileContainer from "./ProfileContainer";
import WarblerContainer from "./WarblerContainer";
import { Route } from "react-router-dom";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <Route exact path="/profile" component={ProfileContainer} />
        <WarblerContainer />
      </div>
    );
  }
}

export default Home;
