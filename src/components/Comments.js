import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "../App.css";
import {
  getCommentsByArticleId,
  postCommentByArticle,
  patchCommentVotes
} from "../api";

class Comments extends Component {
  state = {
    comments: [],
    body: "",
    username: ""
  };

  async componentDidMount() {
    const comments = await getCommentsByArticleId(this.props.article_id);
    this.setState({ comments });
  }
  render() {
    const { comments } = this.state;
    return (
      <div id="commentsForArticle">
        <h1>Comments: </h1>

        <ul>
          {comments.map(comment => (
            <div id="comments">
              <button onClick={() => this.handleVoteClick(1)}>Voteup</button>
              <button onClick={() => this.handleVoteClick(-1)}>VoteDown</button>
              <p>Author: {comment.author} </p>
              <p>Date: {comment.date}</p>
              <p>Votes: {comment.votes}</p>
              <p>Comment: {comment.body}</p>
              <br />
            </div>
          ))}
        </ul>
      </div>
    );
  }
  handleVoteClick = voteChange => {
    patchCommentVotes(
      voteChange,
      this.props.article_id,
      this.props.comment_id
    ).then(article => {
      this.setState(prevState => {
        return {
          comments: {
            ...prevState.comment,
            votes: prevState.comment.votes + voteChange
          }
        };
      });
    });
  };
}

export default Comments;
