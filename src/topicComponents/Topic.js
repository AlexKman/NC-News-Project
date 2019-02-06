import React, { Component } from "react";
import { getArticlesByTopic, postArticleByTopic } from "../api";
import "../App.css";

class Topic extends Component {
  state = {
    articles: [],
    title: "",
    body: "",
    username: ""
  };
  async componentDidMount() {
    const articles = await getArticlesByTopic(this.props.topic);
    this.setState({ articles });
  }
  render() {
    const { articles } = this.state;

    return (
      <div id="articlesForATopic">
        <h1>Articles:</h1>
        <ul id="topicalArticleList">
          {articles.map((article, index) => (
            <div>
              <p>• {article.title}</p>
            </div>
          ))}
        </ul>
        <button onClick={this.handleClick}>Post Article</button>
        <input
          placeholder="title"
          onChange={this.changeTitle}
          value={this.state.title}
          id="titleInput"
        />
        <input
          placeholder="username"
          id="usernameInput"
          onChange={this.changeUsername}
          value={this.state.username}
        />
        <br />
        <input
          placeholder="body"
          id="bodyInput"
          onChange={this.changeBody}
          value={this.state.body}
        />
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
  handleClick = event => {
    this.setState({ title: "", username: "", body: "" });
    postArticleByTopic(
      this.props.topic,
      this.state.title,
      this.state.body,
      this.state.username
    ).then(article => {
      this.setState({ articles: [...this.state.articles, article] });
    });
  };
}

export default Topic;
