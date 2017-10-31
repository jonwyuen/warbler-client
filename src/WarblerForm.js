import React, { Component } from "react";

class WarblerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
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
    let message = this.state.message;
    this.props.handleSubmit(message);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="message"
            value={this.state.message}
            type="text"
          />
          <button>Warble</button>
        </form>
      </div>
    );
  }
}

export default WarblerForm;
