import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as userActions from "../userHelpers";
import UserDropdown from "./UserDropdown";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { getCurrentUser, logoutCurrentUser } = userActions;
    const currentUser = getCurrentUser();
    const authButtons = (
      <div>
        <UserDropdown currentUser={currentUser} logout={logoutCurrentUser} />
      </div>
    );

    const noAuthButtons = (
      <div className="nav-button-container">
        <Link to="/signup">
          <button className="nav-button">Sign up</button>
        </Link>
        <Link to="/login">
          <button className="nav-button">Log in</button>
        </Link>
      </div>
    );
    const navButtons = currentUser ? authButtons : noAuthButtons;

    return (
      <div className="nav-bar-container">
        <div className="nav-bar">
          <div className="logo-container">
            <Link to="/">
              <img className="logo" src="/svg/warbler-logo.svg" />
            </Link>
          </div>
          {navButtons}
        </div>
      </div>
    );
  }
}

export default Nav;
