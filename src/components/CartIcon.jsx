
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <Link to="/cart" className="relative inline-block">
      <FaShoppingCart size={25} />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full px-2 text-xs">
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
