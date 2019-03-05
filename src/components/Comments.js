import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "../css/comments.css";
import {
  getCommentsByArticleId,
  postCommentByArticle,
  patchCommentVotes
} from "../api";

class Comments extends Component {
  state = {
    comments: [],
    body: "",
    username: "",
    hasntvoted: true
  };

  async componentDidMount() {
    const comments = await getCommentsByArticleId(this.props.article_id);
    this.setState({ comments });
  }
  render() {
    const { comments, hasntvoted } = this.state;

    return (
      <div id="commentsForArticle">
        <h1>Comments: </h1>

        <ul>
          {comments.map(comment => (
            <div id="comments">
              <button
                id="votesButton"
                onClick={() =>
                  hasntvoted && this.handleVoteClick(1, comment.comment_id)
                }
              >
                ↑
              </button>
              <p>Votes: {comment.votes}</p>
              <button
                id="votesButton"
                onClick={() =>
                  hasntvoted && this.handleVoteClick(-1, comment.comment_id)
                }
              >
                ↓
              </button>
              <p>By: {comment.author} </p>
              <p>On: {comment.date}</p>

              <p>{comment.body}</p>
              <p>comment_id: {comment.comment_id}</p>
              <br />
            </div>
          ))}
        </ul>
      </div>
    );
  }
  handleVoteClick = (voteChange, comment_id) => {
    patchCommentVotes(voteChange, this.props.article_id, comment_id);
    const updatedArray = this.state.comments.map(comment => {
      if (comment.comment_id === comment_id) {
        comment.votes += voteChange;
      }
      return comment;
    });
    this.setState(prevState => {
      return {
        hasntvoted: false,
        comments: updatedArray
      };
    });
  };
}

export default Comments;
