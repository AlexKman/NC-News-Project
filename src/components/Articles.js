import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { getArticles } from "../api";

import "../css/articles.css";

class Articles extends Component {
  state = {
    articles: [],
    haserror: null
  };

  async componentDidMount() {
    const articles = await getArticles();
    this.setState({ articles });
  }

  render() {
    const { articles } = this.state;

    return (
      <div id="articleslist">
        <h1 id="fancyfont"> All Articles</h1>
        <ul className="articleUlList">
          {articles.map(article => (
            <Link to={`/articles/${article.article_id}`} id="articlelinks">
              <section id="title">{article.title}</section>
              <section id="author">By {article.author}</section>
              <section id="votes">Rating = {article.votes}</section>
              <section id="commentCount">
                {" "}
                {article.comment_count} comments
              </section>
              <section id="topic"> {article.topic}</section>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Articles;
