import { BsCartPlusFill } from "react-icons/bs";
import BackButton from "../shared/BackButton";
import CartButton from "../shared/CartButton";

const ProductDetails = ({ item, id }) => {
  return (
    <div>
      <h2>{item[id].name}</h2>
      <h3>${item[id].price.toFixed(2)}</h3>
      <h3>{item[id].description}</h3>
      <CartButton></CartButton>
      <BackButton></BackButton>
    </div>
  );
};

export default ProductDetails;
