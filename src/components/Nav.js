import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "../css/nav.css";

const Nav = () => {
  return (
    <nav id="nav">
      <Link to="/" id="navComp">
        Home{" "}
      </Link>
      &nbsp;
      <Link to="/topics" id="navComp">
        Topics
      </Link>
      &nbsp;
      <Link to="/articles" id="navComp">
        Articles
      </Link>
    </nav>
  );
};
export default Nav;
