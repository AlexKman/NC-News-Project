import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import {
  getArticleById,
  patchArticleVotes,
  postCommentByArticle
} from "../api";

import Button from "react-bootstrap/Button";
import "../css/article.css";
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
      <div className="articleContainer">
        <section id="articleTitle">{title}</section>
        <section id="body">{body}</section>
        <section className="voting">
          <button
            id="vote"
            onClick={() => hasntvoted && this.handleVoteClick(1)}
          >
            Vote up
          </button>
          <p id="votestitle"> Votes: {votes}</p>
          <button
            id="vote"
            onClick={() => hasntvoted && this.handleVoteClick(-1)}
          >
            Vote down
          </button>
        </section>

        <section id="commentsPost">
          <p id="postNewComment">Post New Comment</p>
          <textarea
            rows="5"
            cols="5"
            placeholder="body"
            onChange={this.changeBody}
            value={this.state.body}
          />
          <div className="topicAndBy">
            <p>By : {author} </p>
          </div>
          <Button variant="link" onClick={this.handleClick}>
            Post new comment
          </Button>
        </section>
        <Link
          id="getCommentsLink"
          to={`/articles/${this.props.article_id}/comments`}
        >
          <Button variant="dark" id="getComments">
            Get Comments
          </Button>
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
      localStorage.username
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
