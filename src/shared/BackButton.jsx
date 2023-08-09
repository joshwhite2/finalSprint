import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/products">
      <button className="btn1">Go Back</button>
    </Link>
  );
};

export default BackButton;
