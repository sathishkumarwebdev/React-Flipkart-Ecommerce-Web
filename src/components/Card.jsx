import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

export function Card({ product }) {
  const { title, price, rating, discountPercentage, thumbnail, id } = product;
  const navigate = useNavigate();

  const discountValue = price * ((100 - discountPercentage) / 100);
  const value = discountValue.toFixed(2);

  return (
    <>
      <div className="card-box">
        <div className="card-img">
          <img src={thumbnail} alt={title} className="thumbnail-img" />
        </div>
        <div className="card-title" id={id}>
          {title}
        </div>
        <div className="card-rating">
          <div className="card-rating-box">
            <div>{rating.toFixed(1)}</div>

            <FaStar color="white" fontSize={10} />
          </div>
        </div>
        <div className="card-rate">
          <div className="value">${value}</div>
          <div className="price">
            <strike>${price}</strike>
          </div>
          <div className="off">{discountPercentage.toFixed(1)}% off</div>
        </div>
      </div>
    </>
  );
}
