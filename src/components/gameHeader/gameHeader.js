import React from "react";
import "./gameHeader.css";

const gameHeader = props => (
  <div className="gameHeader">
    <div className="title">{props.children}</div>
    <div className="scores">
      Current Score: {props.score} High Score: {props.highscore}
    </div>
  </div>
);

export default gameHeader;
