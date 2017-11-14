import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import UserForm from "../components/UserForm";
import Home from "./Home";
import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(user, authType) {
    axios
      .post(`http://localhost:3001/api/auth/${authType}`, user)
      .then(res => {
        const token = res.data.token;
        const warblerUser = {
          token: res.data.token,
          userId: res.data.userId,
          username: res.data.username,
          profileImage: res.data.profileImage
        };
        localStorage.setItem("warblerUser", JSON.stringify(warblerUser));
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/signup"
            render={props => (
              <UserForm handleSubmit={this.handleSubmit} {...props} />
            )}
          />
          <Route
            exact
            path="/login"
            render={props => (
              <UserForm handleSubmit={this.handleSubmit} {...props} />
            )}
          />
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    );
  }
}

export default withRouter(Main);
