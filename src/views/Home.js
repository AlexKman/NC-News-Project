import React from "react";
import "../css/home.css";

export const Home = () => (
  <div className="homepage">
    <p id="welcomeTag">Welcome {localStorage.user}!</p>
    <p>
      {" "}
      Through this site you can view all articles for a given topic through the
      topics navigation or all the articles through the articles navigation,
      from there you can upvote or downvote the given articles and also add your
      own articles for a specific topic.
    </p>
    <br />

    <p>
      Furthermore you can also view all the comments for the given articles,
      upvote or downvote the comments upon your choice and even have the option
      to add your own comments.
    </p>
  </div>
);
