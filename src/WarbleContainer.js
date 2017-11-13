import React, { Component } from "react";
import Warble from "./Warble";
import axios from "axios";
import { setAuthorizationToken } from "./setAuthorizationToken";
import moment from "moment";

class WarbleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      warbles: []
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

    moment.updateLocale("en", {
      relativeTime: {
        s: "%ds",
        m: "%dm",
        h: "%dh",
        d: "%dd",
        m: "%dm",
        y: "%dy"
      }
    });

    axios.get("http://localhost:3001/api/warbles").then(v => {
      let warbles = v.data.map(w => {
        return {
          id: w._id,
          message: w.message,
          username: w.userId.username,
          profileImage: w.userId.profileImage,
          createdAt: w.createdAt
        };
      });
      this.setState({ warbles });
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
    let warbles = this.state.warbles.map(w => (
      <Warble
        key={w.id}
        username={w.username}
        message={w.message}
        profileImage={w.profileImage}
        timeFromNow={moment(w.createdAt).fromNow(true)}
      />
    ));

    return <div className="warble-container">{warbles}</div>;
  }
}

export default WarbleContainer;
