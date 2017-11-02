import React, { Component } from "react";
import "./Warbler.css";

class Warbler extends Component {
  render() {
    return (
      <div className="warbler-wrapper">
        <div className="warbler-info">
          <span>{this.props.username}</span>
          <span>@{this.props.username}</span>
          <span>{this.props.timeFromNow}</span>
        </div>
        <div className="warbler-message">
          <p>{this.props.message}</p>
        </div>
        <div className="warbler-actions">
          <span>reply</span>
          <span>rewaable</span>
          <span>heart</span>
          <span>dm</span>
        </div>
      </div>
    );
  }
}

export default Warbler;
