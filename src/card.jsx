import React from "react";

const Card = ({ image, title, location, price }) => {
  return (
    <div className="card">
      <img src="{{}}" alt="Appartement" className="card-image" />
      <div className="card-content">
        <h3>{{ title }}</h3>
        <p>{location}</p>
        <p className="card-price">${price} AUD total</p>
      </div>
    </div>
  );
};

export default Card;
