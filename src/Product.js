import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="Product">
      <div className="Product-info">
        <p>{title}</p>
        <p className="Product-price">
          <medium>€ </medium>
          <strong>{parseFloat(price).toFixed(2)}</strong>
        </p>
        <div className="Product-rating">
          {Array(rating)
            .fill()
            .map((_) => "⭐")}
        </div>
      </div>

      <img src={image} alt={title} />
      <button>Add To Basket</button>
    </div>
  );
}

export default Product;
