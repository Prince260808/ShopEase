import { FaSearch, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon";
import { getUser, logoutUser } from "../utils/auth";

const Header = ({ searchText, setSearchText }) => {
  const user = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
        
        <Link to="/" className="text-2xl font-bold text-green-600">
          ShopEase
        </Link>

        {/* SEARCH */}
        <div className="flex-1 max-w-xl relative hidden md:block">
          <FaSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-12 pr-4 py-3 rounded-full border focus:ring-2 focus:ring-green-500"
          />
        </div>

        <CartIcon />

        {/* AUTH */}
        {user ? (
          <button
            onClick={handleLogout}
            className="hidden md:flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-50"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="hidden md:flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-50"
          >
            <FaUser />
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
