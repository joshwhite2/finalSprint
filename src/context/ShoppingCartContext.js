import { createContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    fetchShoppingCart();
  }, []);

  const fetchShoppingCart = async () => {
    try {
      const response = await fetch("http://localhost:5000/shoppingcart");
      const data = await response.json();
      setShoppingCart(data);
    } catch (error) {
      console.error("Error fetching shopping cart:", error);
    }
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

  const removeFromCart = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:5000/shoppingcart/${itemId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // If the delete request was successful, update the shopping cart state
      setShoppingCart((prevCart) => prevCart.filter(item => item.id !== itemId));
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };