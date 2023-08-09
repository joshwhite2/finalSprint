import React, { useState } from "react";
import BackButton from "../shared/BackButton";
import { Link, useLocation } from "react-router-dom";
import FormattedPrice from "./FormattedPrice";
import { getProducts } from "../data/api";

// making a drop down preview of what is already in cart
const ShoppingCart = () => {
  const cartItems = getProducts();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const togglePreview = () => {
    setIsPreviewOpen(!isPreviewOpen);
  };

  // using useLocation to remove dropdown cart from cart page
  const location = useLocation();
  const isCartPage = location.pathname === "/cart";

  return (
    <>
      {!isCartPage && (
        <div
          className="cart-icon"
          onMouseEnter={togglePreview}
          onMouseLeave={togglePreview}
        >
          <Link to="/cart">
            <img src="/images/cart-icon.png" alt="view cart" />
          </Link>
          {isPreviewOpen && (
            <div className="cart-preview">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id}>
                    <p>
                      {item.name} - <FormattedPrice value={item.price} />
                    </p>
                  </div>
                ))
              ) : (
                <p> Your cart is empty</p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
