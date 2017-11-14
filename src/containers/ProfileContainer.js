import React, { Component } from "react";
import Profile from "../components/Profile";
import WarblerContainer from "./WarblerContainer";
import axios from "axios";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    // axios.get("http://localhost:3005/users/1").then(v => {
    //   let user = {
    //     ...this.state.user,
    //     username: v.data.username,
    //     name: v.data.name,
    //     warblercount: v.data.messages.length
    //   };
    //   this.setState({
    //     user
    //   });
    // });
  }

  render() {
    return (
      <div className="profile-container">
        <Profile
          username={this.state.user.username}
          name={this.state.user.name}
          warblercount={this.state.user.warblercount}
        />
        <WarblerContainer />
      </div>
    );
  }
}

export default ProfileContainer;
