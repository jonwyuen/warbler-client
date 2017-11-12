import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: false
    };
  }

  render() {
    // const authButtons = (
    //   <div>
    //     <Link>
    //       <button>Username</button>
    //     </Link>
    //     <Link>
    //       <button>Log Out</button>
    //     </Link>
    //   </div>
    // );

    const noAuthButtons = (
      <div className="nav-button-container">
        <Link to="/signup">
          <button className="nav-button">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="nav-button">Log In</button>
        </Link>
      </div>
    );
    // const navButtons = this.state.currentUser ? authButtons : noAuthButtons;

    return (
      <div className="nav-bar-container">
        <div className="nav-bar">
          <div className="logo-container">
            <Link to="/">
              <img className="logo" src="/svg/warbler-logo.svg" />
            </Link>
          </div>
          {noAuthButtons}
        </div>
      </div>
    );
  }
}

export default Nav;
