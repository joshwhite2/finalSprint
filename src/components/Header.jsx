import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Products</Link>
      <Link to="/cart">View Cart</Link>
    </div>
  );
};

export default Header;
