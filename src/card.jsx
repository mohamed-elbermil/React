import React from "react";

const Card = ({ image, title, location, price, view, details }) => {
  return (
    <div className="card">
      <img src={image} alt="Appartement" className="card-image" />
      <div className="card-content">
        <div className="title-icon">
          <h3>{title}</h3>
          <div className="heart">
            <i class="fa-regular fa-heart"></i>
          </div>
        </div>
        <p>{location}</p>
        <div className="review">
          <div className="star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p>{view}</p>
        </div>
        <p className="details">{details}</p>
        <p className="card-price">
          <span>${price}</span> AUD total
        </p>
      </div>
    </div>
  );
};

export default Card;
