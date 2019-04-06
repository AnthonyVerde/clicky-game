import React from "react";
import "./imgCard.css";

const imgCard = props => (
  <div className="imgCard" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.imageUrl} />
    </div>
  </div>
);

export default imgCard;
