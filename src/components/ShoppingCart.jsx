import React from "react";
import BackButton from "../shared/BackButton";
import { useContext, useEffect, useState } from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";

const ShoppingCart = ({ item }) => {
  const { } = useContext(ShoppingCartContext);

  return (
    <>
      <div>ShoppingCart</div>
      <div className="num-display">{item}</div>
      <BackButton></BackButton>
    </>
  );
}
  ;

export default ShoppingCart;

// import BackButton from "../shared/BackButton";
// import { ShoppingCartContext } from "../context/ShoppingCartContext";
// import { useContext, useEffect, useState } from "react";
// import { ShoppingCartProvider } from "../context/ShoppingCartContext";
// import ProductDetails from "./ProductDetails";


// const ShoppingCart = () => {
//   const { shoppingCart, fetchShoppingCart } = useContext(ShoppingCartContext);


//   useEffect(() => {
//     fetchShoppingCart(); // 
//   }, []);

//   return (
//     <>

//       <div>
//         <h2>Your Shopping Cart</h2>
//         {shoppingCart.map(item => (
//           <ShoppingCart item={item} />
//         ))}
//       </div>
//       {/* <button onClick={handleAddToCart}>Add to Cart</button>
//       <button onClick={handleRemoveFromCart}>Remove from Cart</button> */}

//       <BackButton></BackButton>
//     </>
//   );
// };

// export default ShoppingCart;
