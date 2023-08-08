import { createContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]); // Use lowercase "shoppingCart"

  useEffect(() => {
    const getShoppingCart = async () => {
      const shoppingCartFromServer = await fetchShoppingCart();
      setShoppingCart(shoppingCartFromServer);
    };
    getShoppingCart();
  }, []);

  // FETCH SHOPPING CART FUNCTION
  const fetchShoppingCart = async () => {
    const res = await fetch("http://localhost:5000/shoppingcart"); // Use correct API endpoint
    const data = await res.json();
    return data;
  };

  const addToCart = async (newItem) => {
    try {
      const response = await fetch("http://localhost:5000/shoppingcart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // If the add request was successful, update the shopping cart state
      setShoppingCart((prevCart) => [...prevCart, newItem]);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };


  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        addToCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
