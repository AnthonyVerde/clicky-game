import React from "react";
import "./Header.css";

const Header = props => (
  <div className="Header">
    <div className="title">{props.children}</div>
    <div className="scores row">
      Current Score: {props.score} High Score: {props.highscore}
    </div>
  </div>
);

export default Header;
