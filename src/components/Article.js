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
    username: ""
  };

  async componentDidMount() {
    const article = await getArticleById(this.props.article_id);

    this.setState({ article });
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

    return (
      <div id="articlediv">
        <h1>Article</h1>
        <p>Topic: {topic}</p>
        <p>Title : {title}</p>
        <p>Author : {author} </p>
        <p>Body : {body}</p>
        <p>Votes: {votes}</p>
        <button onClick={() => this.handleVoteClick(1)}>Voteup</button>
        <button onClick={() => this.handleVoteClick(-1)}>VoteDown</button>

        <button onClick={this.handleClick}>Post new comment</button>
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
          <button>Get Comments</button>
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
      console.log(comment, "comment here");
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
