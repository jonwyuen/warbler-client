import React, { Component } from "react";
import WarbleContainer from "./WarbleContainer";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <WarbleContainer />
      </div>
    );
  }
}

export default Home;
