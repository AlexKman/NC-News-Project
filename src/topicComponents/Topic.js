import React, { Component } from "react";
import { getArticlesByTopic } from "../api";
import "../App.css";

class Topic extends Component {
  state = {
    articles: []
  };
  async componentDidMount() {
    const articles = await getArticlesByTopic(this.props.topic);
    this.setState({ articles });
  }
  render() {
    const { articles } = this.state;
    console.log(articles);

    return (
      <div id="articlesForATopic">
        <h1>Articles:</h1>
        <ul id="topicalArticleList">
          {articles.map((article, index) => (
            <div>
              <p>• {article.title}</p>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Topic;
