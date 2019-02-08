import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import {
  getArticleById,
  patchArticleVotes,
  postCommentByArticle
} from "../api";
import "../App.css";
import Comments from "./Comments";

class Article extends Component {
  state = {
    article: {},
    body: "",
    username: "",
    hasntvoted: true,
    hasError: null
  };

  fetchArticle = () => {
    getArticleById(this.props.article_id)
      .then(article => {
        this.setState({ article });
      })
      .catch(err => {
        this.setState({ hasError: true });
      });
  };

  componentDidMount() {
    this.fetchArticle();
  }

  render() {
    const {
      title,
      author,
      body,
      topic,
      votes,
      comment_count
    } = this.state.article;

    const { hasntvoted, hasError } = this.state;

    if (hasError) {
      return <h1>404 Article not found</h1>;
    }

    return (
      <div id="articleDiv">
        <p id="articleTitle">{title}</p>
        <p id="topictitle">Topic: {topic}</p>
        <p id="bytitle">By : {author} </p>
        <p id="articlebody">{body}</p>

        <button
          id="voteup"
          onClick={() => hasntvoted && this.handleVoteClick(1)}
        >
          ↑
        </button>
        <p id="votestitle"> {votes}</p>
        <button
          id="votedown"
          onClick={() => hasntvoted && this.handleVoteClick(-1)}
        >
          ↓
        </button>

        <button id="postComment" onClick={this.handleClick}>
          Post new comment
        </button>
        <input
          placeholder="body"
          onChange={this.changeBody}
          value={this.state.body}
        />
        <input
          placeholder="username"
          onChange={this.changeUsername}
          value={this.state.username}
        />

        <Link to={`/articles/${this.props.article_id}/comments`}>
          <button id="getComments">Get Comments</button>
          <br />
          <br />
        </Link>
        <Router>
          <Comments path="comments"> </Comments>
        </Router>
      </div>
    );
  }
  handleClick = event => {
    event.preventDefault();
    this.setState({ body: "", username: "" });
    postCommentByArticle(
      this.props.article_id,
      this.state.body,
      this.state.username
    ).then(comment => {
      this.setState({ comments: [...this.state.comments, comment] });
    });
  };
  changeUsername = event => {
    const username = event.target.value;
    this.setState({ username });
  };
  changeBody = event => {
    const body = event.target.value;
    this.setState({ body });
  };
  handleVoteClick = voteChange => {
    patchArticleVotes(voteChange, this.props.article_id).then(article => {
      this.setState(prevState => {
        return {
          hasntvoted: false,
          article: {
            ...prevState.article,
            votes: prevState.article.votes + voteChange
          }
        };
      });
    });
  };
}

export default Article;
