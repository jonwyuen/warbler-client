import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile-wrapper">
        <p>{this.props.username}</p>
        <p>{this.props.warbles.length} warbles</p>
      </div>
    );
  }
}

export default Profile;
