import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import { getProducts } from "./data/api";
import { useState } from "react";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setItemId } from "./components/ProductItem";

function App() {
  const [products, setProducts] = useState(getProducts);
  const [id, setId] = useState(0);

  return (
    <Router>
     
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="App">
                <ProductList products={products}></ProductList>
              </div>
            </>
          }
        />
        <Route
          path="/details"
          element={<ProductDetails item={products} id={id}></ProductDetails>}
        ></Route>
        <Route path="/cart" element={ <ShoppingCartProvider><ShoppingCart></ShoppingCart> </ShoppingCartProvider>}></Route>
      </Routes>
     
    </Router>
  );
}

export default App;
