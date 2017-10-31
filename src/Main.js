import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
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
            component={props => (
              <SignUpForm handleSubmit={this.handleSubmit} {...props} />
            )}
          />
          <Route exact path="/login" component={LogInForm} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    );
  }
}

export default Main;
