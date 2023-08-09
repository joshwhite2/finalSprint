import React from "react";

import BackButton from "../shared/BackButton";

import { useContext, useEffect, useState } from "react";

import ShoppingCartContext from "../context/ShoppingCartContext";

const ShoppingCart = ({ item }) => {
  const { shoppingCart } = useContext(ShoppingCartContext);

  return (
    <>
      <div>
        <h2>ShoppingCart</h2>

        {shoppingCart.map((item) => (
          <div key={item.id}>
            {item.name}
            {item.price}
          </div>
        ))}
      </div>

      <BackButton></BackButton>
    </>
  );
};

export default ShoppingCart;
