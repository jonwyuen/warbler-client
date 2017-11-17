import React, { Component } from "react";
import "./ProfileCard.css";

class ProfileCard extends Component {
  render() {
    return (
      <div className="profile-wrapper">
        <div className="profile-card-section">
          <img src={this.props.profileImage} alt="Profile Image" />
        </div>
        <div className="profile-card-section">
          <p>{this.props.username}</p>
        </div>
        <div className="profile-card-section">
          <p>@{this.props.username}</p>
        </div>
        <div className="profile-card-section">
          <p>{this.props.warbles.length} warbles</p>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
