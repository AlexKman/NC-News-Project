import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "../App.css";
import { getCommentsByArticleId } from "../api";

class Comments extends Component {
  state = {
    comments: []
  };
  async componentDidMount() {
    const comments = await getCommentsByArticleId(this.props.article_id);
    this.setState({ comments });
  }
  render() {
    const { comments } = this.state;
    console.log(this.props.article_id);
    return (
      <div id="commentsForArticle">
        <h1>Comments</h1>
      </div>
    );
  }
}

export default Comments;
