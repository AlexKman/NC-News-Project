import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { getArticleById, patchVotes, getCommentsByArticleId } from "../api";
import "../App.css";

class Article extends Component {
  state = {
    article: {}
  };

  async componentDidMount() {
    const article = await getArticleById(this.props.article_id);
    console.log(article, "HERE");
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
    console.log(this.state.article);
    return (
      <div id="articlediv">
        <h1>Article</h1>
        {console.log(this.state.article, "here")}
        <p>Topic: {topic}</p>
        <p>Title : {title}</p>
        <p>Author : {author} </p>
        <p>Body : {body}</p>
        <p>Votes: {votes}</p>
        <button onClick={() => this.handleVoteClick(1)}>Voteup</button>
        <button onClick={() => this.handleVoteClick(-1)}>VoteDown</button>
        <Link to="/articles/article_id/comments">
          <button>Get Comments</button>
        </Link>
      </div>
    );
  }

  handleVoteClick = voteChange => {
    patchVotes(voteChange, this.props.article_id).then(article => {
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
