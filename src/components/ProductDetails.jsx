import { BsCartPlusFill } from "react-icons/bs";
import BackButton from "../shared/BackButton";
import CartButton from "../shared/CartButton";
import FormattedPrice from "./FormattedPrice";

const ProductDetails = ({ item, id }) => {
  return (
    <div>
      <img src={item[id].icon} alt="pen" className="productImage" />
      <h2>{item[id].name}</h2>
      <h3>
        <FormattedPrice value={item[id].price} />
      </h3>
      <h3>{item[id].description}</h3>
      <CartButton></CartButton>
      <BackButton></BackButton>
    </div>
  );
};

export default ProductDetails;
