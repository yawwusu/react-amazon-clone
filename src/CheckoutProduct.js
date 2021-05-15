import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ item }) {
  const [_, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: item.id,
    });
  };

  return (
    <div className="CheckoutProduct">
      <img
        className="CheckoutProduct-image"
        src={item.image}
        alt={item.title}
      />
      <div className="CheckoutProduct-info">
        <p className="CheckoutProduct-title">{item.title}</p>
        <p className="CheckoutProduct-price">
          <strong>€ {parseFloat(item.price).toFixed(2)}</strong>
        </p>
        <div className="CheckoutProduct-rating">
          {Array(item.rating)
            .fill()
            .map((_) => "⭐")}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
