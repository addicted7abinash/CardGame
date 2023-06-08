import React from "react";

function CardItem({ card }) {
  return (
    <div className="card">
      <div className="card-image"></div>
      <div className="card-content">
        <div className="card-header">{card.name}</div>
        <div className="attribute">
          <div className="attribute-label">Health: </div>
          <div className="attribute-value">{card.health}</div>
        </div>
        <div className="attribute">
          <div className="attribute-label">Attack: </div>
          <div className="attribute-value">{card.attack}</div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
