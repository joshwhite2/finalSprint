import { BsCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import CartButton from "../shared/CartButton";

const ProductItem = ({ item }) => {
  return (
    <div className="productList">
      <Link to="/details">
        <h2>{item.name}</h2>
      </Link>

      <h3>${item.price.toFixed(2)}</h3>
      <CartButton></CartButton>
    </div>
  );
};

export default ProductItem;
