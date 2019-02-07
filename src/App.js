import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { Home } from "./views/Home";
import Articles from "./components/Articles";
import Topics from "./views/Topics";
// import { Auth } from "./components/Auth";
import "./App.css";
import Article from "./components/Article";
import Topic from "./topicComponents/Topic";
import Comments from "./components/Comments";

class App extends Component {
  state = {
    user: null
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <React.Fragment>
          <Nav />
          {/* <Auth user={user} setUser={this.setUser}> */}
          <Router>
            <Home path="/" />
            <Topics path="/topics" />
            <Article path="/articles/:article_id/*" />
            <Articles path="/articles" />
            <Topic path="/topics/:topic/articles"> </Topic>
          </Router>
          {/* </Auth> */}
        </React.Fragment>
      </div>
    );
  }
  setUser = user => {
    this.setState({
      user
    });
  };
}

const Nav = () => {
  return (
    <nav id="nav">
      <Link to="/">Home </Link>
      &nbsp;
      <Link to="/topics">Topics</Link>
      &nbsp;
      <Link to="/articles">Articles</Link>
    </nav>
  );
};

export default App;
