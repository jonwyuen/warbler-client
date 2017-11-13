import React, { Component } from "react";
import "./Warble.css";

class Warble extends Component {
  render() {
    return (
      <div className="warble-wrapper">
        <div className="warble-media warble-section" />
        <div className="warble-info warble-section">
          <span>
            <img
              className="profile-image"
              src={this.props.profileImage}
              alt="Profile Image"
            />
          </span>
          <span>{this.props.username}</span>
          <span className="warble-time">{this.props.timeFromNow}</span>
          <div className="warble-handle">@{this.props.username}</div>
        </div>
        <div className="warble-message warble-section">
          <p>{this.props.message}</p>
        </div>
        <div className="warble-actions warble-section">
          <span>Reply</span>
          <span>Rewarble</span>
          <span>Favorite</span>
        </div>
      </div>
    );
  }
}

export default Warble;
