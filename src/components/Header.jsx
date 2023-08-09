import React from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Products</Link>
      <Link to="/cart">
        <ShoppingCart />
      </Link>
    </div>
  );
};

export default Header;
