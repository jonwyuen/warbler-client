import React, { Component } from "react";
import "./ProfileCard.css";

class ProfileCard extends Component {
  render() {
    return (
      <div className="profile-wrapper">
        <div className="profile-card-top">
          <img src={this.props.profileImage} alt="Profile Image" />
          <span>{this.props.username}</span>
        </div>
        <div>@{this.props.username}</div>
        <div className="profile-card-bottom">
          <p>Warbles</p>
          <p>{this.props.warbles.length}</p>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
