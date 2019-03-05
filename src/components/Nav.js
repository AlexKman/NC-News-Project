import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "../css/nav.css";

const Nav = () => {
  return (
    <div class="navBar">
      <nav>
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
      <div className="pagetitle">
        <h1>
          Northcoders <span className="fancyfont">news</span>
        </h1>
      </div>
    </div>
  );
};
export default Nav;
