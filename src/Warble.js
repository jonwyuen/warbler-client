import React, { Component } from "react";
import "./Warble.css";

class Warble extends Component {
  render() {
    return (
      <div className="warble-wrapper">
        <div className="warble-info">
          <span>
            <img
              className="profile-image"
              src={this.props.profileImage}
              alt="Profile Image"
            />
          </span>
          <span>{this.props.username}</span>
          <div>@{this.props.username}</div>
          <span>{this.props.timeFromNow}</span>
        </div>
        <div className="warble-message">
          <p>{this.props.message}</p>
        </div>
        <div className="warble-actions">
          <span>reply</span>
          <span>rewaable</span>
          <span>heart</span>
          <span>dm</span>
        </div>
      </div>
    );
  }
}

export default Warble;
