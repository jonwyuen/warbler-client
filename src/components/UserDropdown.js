import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./UserDropdown.css";

class UserDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <DropdownButton
        id="user-dropdown"
        pullRight={true}
        bsSize="large"
        noCaret
        title={
          <div>
            <img
              className="profile-image"
              src={`${this.props.currentUser.profileImage}`}
              alt=""
            />
            <span>{`${this.props.currentUser.username}`}</span>
          </div>
        }
      >
        <LinkContainer to={`${this.props.currentUser.username}`}>
          <MenuItem className="dropdown-item">Profile</MenuItem>
        </LinkContainer>
        <MenuItem href="#">Edit account</MenuItem>
        <MenuItem href="#">Update password</MenuItem>
        <MenuItem href="#">Log out</MenuItem>
      </DropdownButton>
    );
  }
}

export default UserDropdown;
