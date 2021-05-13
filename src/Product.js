import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [_, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      items: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

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
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
