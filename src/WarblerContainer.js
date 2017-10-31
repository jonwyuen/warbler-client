import React, { Component } from "react";
import Warbler from "./Warbler";
import WarblerForm from "./WarblerForm";
import axios from "axios";
import { setAuthorizationToken } from "./setAuthorizationToken";
import moment from "moment";

class WarblerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      warblers: []
    };
  }

  componentDidMount() {
    // axios
    //   .post("http://localhost:3000/users", {
    //     email: "hello@hello.com",
    //     username: "hello",
    //     name: "hello",
    //     password: "hello"
    //   })
    //   .then(v => {
    //     console.log(v);
    //   });
    //   axios
    //     .post("http://localhost:3005/warblers/1", {
    //       message: "test msg"
    //     })
    //     .then(v => {
    //       console.log(v);
    //     });
    // }
    axios.get("http://localhost:3005/warblers").then(v => {
      let warblers = v.data.map(w => {
        return {
          id: w.id,
          message: w.message,
          username: w.username,
          timeFromNow: moment(w.created_at).fromNow()
        };
      });
      this.setState({ warblers });
    });

    // axios.get("http://localhost:3005/users/1").then(v => {
    //   let userWarblers = v.data.messages.map(w => {
    //     return {
    //       username: v.data.username,
    //       message: w.message
    //     };
    //   });
    //   let warblers = [...this.state.warblers, ...userWarblers];
    //   this.setState({
    //     warblers
    //   });
    // });

    // Create token and store in localStorage
    // axios
    //   .post("http://localhost:3000/users/auth", {
    //     username: "hello",
    //     password: "hello"
    //   })
    //   .then(res => {
    //     const token = res.data.token;
    //     localStorage.setItem('token', token)

    // //     // After setting authorization token, new API calls will autmaically have the token included in the header.
    //     setAuthorizationToken(token);  //<-- setting auth token.
    //     // axios
    //     //     .post("http://localhost:3000/warblers/45", {
    //     //       message: "Yes, TokensORKS!"
    //     //     })
    //     //     .then(v => {
    //     //       console.log(v);
    //     //     });
    //   });
  }

  render() {
    let warblers = this.state.warblers.map(w => (
      <Warbler
        key={w.id}
        username={w.username}
        message={w.message}
        timeFromNow={w.timeFromNow}
      />
    ));

    return (
      <div>
        <WarblerForm />
        <div className="warbler-list">{warblers}</div>
      </div>
    );
  }
}

export default WarblerContainer;
