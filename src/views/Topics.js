import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "../App.css";
import { getTopics } from "../api";

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
        <ul>
          {topics.map(topic => (
            <Link to={`/topics/${topic.slug}/articles`} id="topicLinks">
              {topic.slug}
              <br />
              <br />
              <br />
              <br />
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Topics;
