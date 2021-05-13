import { Search } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  console.log("basket", basket);

  return (
    <nav className="Header">
      <Link to="/">
        <img
          className="Header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        />
      </Link>

      <div className="Header-search">
        <input className="Header-searchInput" type="text" />
        <Search className="Header-searchIcon" />
      </div>

      <div className="Header-nav">
        <Link to="/login" className="Header-options">
          <span className="Header-option-1">Hello Yaw</span>
          <span className="Header-option-2">Sign In</span>
        </Link>
        <Link to="/" className="Header-options">
          <span className="Header-option-1">Return</span>
          <span className="Header-option-2">& Orders</span>
        </Link>
        <Link to="/" className="Header-options">
          <span className="Header-option-1">Your</span>
          <span className="Header-option-2">Prime</span>
        </Link>
        <Link to="/checkout" className="Header-basket">
          <ShoppingBasketIcon className="Header-basketIcon" />
          <span className="Header-option-2">{basket.length}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
