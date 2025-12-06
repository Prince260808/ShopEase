import React from "react";
import CartIcon from "./CartIcon";

const Header = ({ searchText, setSearchText }) => {
  return (
    <header className="p-4 shadow-xl bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row sm:items-center gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img src="src/assets/images/store-logo.png" className="w-16" />
          <span className="hidden sm:inline font-bold border-b-[3px]">Ratandan Jaipur, Rajasthan</span>
        </div>

        {/* Search */}
        <input
          type="search"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full sm:flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Nav Items */}
        <nav className="flex flex-wrap gap-3 sm:gap-5 font-semibold text-[18px] items-center">
          <li className="list-none cursor-pointer hover:text-blue-500">Offers</li>
          <li className="list-none cursor-pointer hover:text-blue-500">Discount</li>
          <li className="list-none cursor-pointer hover:text-blue-500">Contact</li>
          <CartIcon />
        </nav>
      </div>
    </header>
  );
};

export default Header;
