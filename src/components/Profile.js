import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile-wrapper">
        <p>{this.props.username}</p>
        <p>{this.props.name}</p>
        <p>{this.props.warblercount} waables</p>
      </div>
    );
  }
}

export default Profile;
