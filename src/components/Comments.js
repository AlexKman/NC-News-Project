import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "../App.css";
import { getCommentsByArticleId } from "../api";

class Comments extends Component {
  state = {
    comments: []
  };

  async componentDidMount() {
    console.log(this.props.article_id);
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
}

export default Comments;
