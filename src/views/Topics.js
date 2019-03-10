import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "../App.css";
import { getTopics } from "../api";
import "../css/topics.css";

class Topics extends Component {
  state = {
    topics: []
  };

  async componentDidMount() {
    const topics = await getTopics();
    this.setState({ topics });
  }
  render() {
    const { topics } = this.state;
    return (
      <div id="topicsdiv">
        <ul id="topicslist">
          {topics.map(topic => (
            <Link to={`/topics/${topic.slug}/articles`} id="topicLinks">
              {this.capitalise(topic.slug)}
            </Link>
          ))}
        </ul>
      </div>
    );
  }
  capitalise = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
}

export default Topics;
