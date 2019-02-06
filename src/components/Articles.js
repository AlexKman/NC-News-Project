import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import { getArticles } from "../api";
import "../App.css";

class Articles extends Component {
  state = {
    articles: []
  };

  async componentDidMount() {
    const articles = await getArticles();
    this.setState({ articles });
  }
  render() {
    const { articles } = this.state;

    return (
      <div id="articleslist">
        <h1>Articles</h1>
        <ul>
          {articles.map(article => (
            <Link to={`/articles/${article.article_id}`} id="articlelinks">
              {article.title}
              <br />
              <br />
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Articles;
