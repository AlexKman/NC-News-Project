import React, { Component } from "react";
import { getUserByUsername } from "../api";
import { InputGroup, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../css/auth.css";

class Auth extends Component {
  state = {
    userText: "jessjelly",
    userErr: null,
    userLoadingState: false
  };

  render() {
    const { user, children } = this.props;
    const { userText, userErr } = this.state;
    if (user) {
      return children;
    } else {
      return (
        <div class="login">
          <h3>Login</h3>

          <form onSubmit={this.handleSubmit}>
            <InputGroup size="sm" className="mb-3">
              <FormControl
                aria-label="Small"
                value={userText}
                placeholder="type username here"
                onChange={this.handleChange}
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <Button onClick={this.handleSubmit}>Submit</Button>
            <div class="usersdiv">
              <h3>Available users</h3> <ul>tickle122</ul>
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
      .then(localStorage.setItem("user", userText))
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
