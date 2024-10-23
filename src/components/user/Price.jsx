import { Link } from "react-router-dom";
import { Prices } from "../Prices";

export const Price = () => {
  return (
    <div>
      <Prices />
      <Link to={"/"}>go to home page </Link>
    </div>
  );
};
