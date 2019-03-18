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
        <section id="body">
          <button
            id="vote"
            className="voteUp"
            onClick={() => hasntvoted && this.handleVoteClick(1)}
          >
            <img src="https://i.imgur.com/EIeM1Up.png" alt="" />
          </button>
          <button
            id="vote"
            class="voteDown"
            onClick={() => hasntvoted && this.handleVoteClick(-1)}
          >
            <img src="https://i.imgur.com/qyFduXD.png" alt="" />
          </button>
          <div className="bodyWrapper">
            <p id="votestitle">{votes} votes</p>
            <p>{body}</p>
          </div>
        </section>
        <br />
        <section id="commentsPost">
          <div class="formWrapper">
            <p id="postNewComment">Post New Comment</p>
            <textarea
              rows="5"
              cols="5"
              className="commentInput"
              placeholder="Just type here to comment in this article!"
              onChange={this.changeBody}
              value={this.state.body}
            />
            <div className="topicAndBy">
              <p>
                By : <b>{author}</b>{" "}
              </p>
            </div>
            <Button
              variant="info"
              className="buttonOrange"
              onClick={this.handleClick}
            >
              Post new comment
            </Button>
          </div>
        </section>
        <Link
          id="getCommentsLink"
          to={`/articles/${this.props.article_id}/comments`}
        >
          <Button variant="secondary" id="getComments">
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
