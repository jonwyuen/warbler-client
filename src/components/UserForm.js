import React, { Component } from "react";
import "./UserForm.css";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      profileImage: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newUser = { ...this.state };
    this.props.handleSubmit(newUser);
    this.setState({
      email: "",
      username: "",
      password: "",
      profileImage: ""
    });
  }

  render() {
    const location = this.props.location.pathname.slice(1);

    if (location === "signup") {
      return (
        <div className="form-container">
          <h3>Welcome to Warbler</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-field">
              <label>Email: </label>
              <input
                type="text"
                onChange={this.handleChange}
                name="email"
                value={this.state.email}
              />
            </div>

            <div className="form-field">
              <label>Username: </label>
              <input
                type="text"
                onChange={this.handleChange}
                name="username"
                value={this.state.username}
              />
            </div>

            <div className="form-field">
              <label>Password: </label>
              <input
                type="password"
                onChange={this.handleChange}
                name="password"
                value={this.state.password}
              />
            </div>

            <div className="form-field">
              <label>Profile Image: </label>
              <input
                type="text"
                onChange={this.handleChange}
                name="profileImage"
                value={this.state.profileImage}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <button className="form-button" type="submit">
                Sign up
              </button>
            </div>
          </form>
        </div>
      );
    } else
      return (
        <div className="form-container">
          <h3>It's Warbler Time</h3>
          <form onSubmit={this.handleLogin}>
            <div className="form-field">
              <label>Username: </label>
              <input
                type="text"
                onChange={this.handleChange}
                name="username"
                value={this.state.username}
              />
            </div>

            <div className="form-field">
              <label>Password: </label>
              <input
                type="password"
                onChange={this.handleChange}
                name="password"
                value={this.state.password}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <button className="form-button" type="submit">
                Log in
              </button>
            </div>
          </form>
        </div>
      );
  }
}

export default UserForm;
