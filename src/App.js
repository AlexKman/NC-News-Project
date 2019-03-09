import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { Home } from "./views/Home";
import Articles from "./components/Articles";
import Topics from "./views/Topics";
import Auth from "./components/Auth";
import "./App.css";
import Article from "./components/Article";
import Topic from "./topicComponents/Topic";
import { NotFound } from "./errorComponents/NotFound";
import Nav from "./components/Nav";
import "./css/home.css";

class App extends Component {
  state = {
    user: ""
  };

  render() {
    const { user } = this.state;
    console.log(user);
    return (
      <div className="App">
        <React.Fragment>
          <Nav />
          <div className="pagetitle">
            <h1>
              Northcoders <span className="fancyfont">news</span>
            </h1>
          </div>
          <Auth user={user} setUser={this.setUser}>
            <Router>
              <Home path="/" />
              <Topics path="/topics" />
              <Article path="/articles/:article_id/*" />
              <Articles path="/articles" />
              <Topic path="/topics/:topic/articles"> </Topic>
              <NotFound default />
            </Router>
          </Auth>
        </React.Fragment>
      </div>
    );
  }

  setUser = username => {
    this.setState({
      user: username
    });
  };
  logOut = () => {
    this.setState({ user: "" });
  };
}

export default App;
