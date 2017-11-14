import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import UserForm from "../components/UserForm";
import Home from "./Home";
import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(user) {
    axios.post("http://localhost:3005/users", user).then(v => {
      console.log(v);
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
          <Route exact path="/login" component={UserForm} />
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    );
  }
}

export default Main;
