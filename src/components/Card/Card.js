import React from "react";
import "./Card.css";

const Card = props => (
  <div className="Card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.imageUrl} />
    </div>
  </div>
);

export default Card;
