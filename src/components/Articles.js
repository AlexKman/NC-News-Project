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
