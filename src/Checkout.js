import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="Checkout">
      <div className="Checkout-left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jgp"
          alt="Checkout page ad"
          className="Checkout-ad"
        />

        {!basket?.length ? (
          <div>
            <h2 className="Checkout-header">Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items click
              on "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="Checkout-header">Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
      {!!basket?.length && (
        <div className="Checkout-right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
