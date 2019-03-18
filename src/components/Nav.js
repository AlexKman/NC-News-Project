import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "../css/nav.css";

const Nav = () => {
  return (
    <div class="navBar">
      <nav>
        <Link to="/" class="navItem">
          Home
        </Link>
        &nbsp;
        <Link to="/topics" class="navItem">
          Topics
        </Link>
        &nbsp;
        <Link to="/articles" class="navItem">
          Articles
        </Link>
      </nav>
    </div>
  );
};
export default Nav;
