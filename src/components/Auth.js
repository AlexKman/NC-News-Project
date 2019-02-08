import React, { Component } from "react";
import { getUserByUsername } from "../api";

class Auth extends Component {
  state = {
    userText: "",
    userErr: null,
    userLoadingState: false
  };

  render() {
    console.log(this.props.user);
    const { user, children } = this.props;
    const { userText, userErr } = this.state;
    if (user) {
      return children;
    } else {
      return (
        <div id="login">
          <h3> Please Login!</h3>

          <form onSubmit={this.handleSubmit}>
            <input
              value={userText}
              placeholder="type username here"
              onChange={this.handleChange}
            />
            <h1>Available users:</h1>
            <div id="usersdiv">
              {" "}
              <ul>tickle122</ul>
              <ul>grumpy19</ul>
              <ul>happyamy2016</ul>
              <ul>cooljmessy</ul>
              <ul>weegempbump</ul>
              <ul>jessjelly</ul>
            </div>
          </form>
          {this.state.userLoadingState && <p>Loading...</p>}
          {userErr && <h4>No user with this name</h4>}
        </div>
      );
    }
  }
  handleSubmit = event => {
    event.preventDefault();

    const { setUser } = this.props;
    const { userText } = this.state;
    this.setState({ userLoadingState: true });

    getUserByUsername(userText)
      .then(user => {
        setUser(user);
      })
      .catch(err => {
        this.setState({
          userErr: err,
          userLoadingState: false
        });
      });
    this.setState({
      userText: ""
    });
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      userText: value
    });
  };
}

export default Auth;