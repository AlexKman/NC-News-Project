import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { getArticlesByTopic, postArticleByTopic } from "../api";

import "../css/topic.css";

class Topic extends Component {
  state = {
    articles: [],
    title: "",
    body: "",
    username: localStorage.user
  };
  async componentDidMount() {
    const articles = await getArticlesByTopic(this.props.topic);
    this.setState({ articles });
  }
  render() {
    const { articles } = this.state;

    return (
      <div className="topicDiv">
        <h1 id="header">All articles for {this.props.topic}</h1>
        <ul id="topicalArticleList">
          {articles.map((article, index) => (
            <div id="topicArticleLinks">
              <Link id="link" to={`/articles/${article.article_id}`}>
                <p>{article.title}</p>
              </Link>
              <section id="author">{article.author}</section>
              <section id="topicVotes">Rating = {article.votes}</section>
              <section id="topicCommentCount">
                {article.comment_count} comments{" "}
              </section>
            </div>
          ))}
        </ul>
        <section id="articlePost">
          <text>Post your own article!</text>
          <input
            placeholder="title"
            onChange={this.changeTitle}
            value={this.state.title}
            id="title"
          />
          <br />
          <input
            placeholder="body"
            onChange={this.changeBody}
            value={this.state.body}
            id="body"
          />
          <button onClick={this.handleClick}>Submit</button>
        </section>
      </div>
    );
  }
  changeTitle = event => {
    const title = event.target.value;
    this.setState({ title });
  };
  changeUsername = event => {
    const username = event.target.value;
    this.setState({ username });
  };
  changeBody = event => {
    const body = event.target.value;
    this.setState({ body });
  };
  handleClick = () => {
    this.setState({ title: "", username: "", body: "" });
    postArticleByTopic(
      this.props.topic,
      this.state.title,
      this.state.body,
      localStorage.user
    ).then(article => {
      this.setState({ articles: [...this.state.articles, article] });
    });
  };
}

export default Topic;
