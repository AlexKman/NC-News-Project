import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { Home } from "./views/Home";
import { Articles } from "./views/Articles";
import { Topics } from "./views/Topics";
import Card from "./components/Card";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Nav />
          <Router primary={false}>
            <Home path="/" />
            <Topics path="/topics" />
            <Articles path="/articles" />
          </Router>
        </React.Fragment>
      </div>
    );
  }
}

const Nav = () => {
  return (
    <nav id="nav">
      <Link to="/">Home</Link>
      <Link to="/topics">Topics</Link>
      <Link to="/articles">Articles</Link>
    </nav>
  );
};

export default App;
