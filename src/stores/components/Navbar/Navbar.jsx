import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <div className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          <h2>E-Mart</h2>
        </Link>

        <div className="flex items-center space-x-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-3 text-gray-500"
            />
          </div>
          <div>
            <Link
              to="/signin"
              className="text-gray-600 hover:text-primary flex items-center"
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Sign In / Sign Up
            </Link>
          </div>
          <Link
            to="/cart"
            className="relative flex items-center text-gray-600 hover:text-primary"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            <span>Cart</span>
            <span className="ml-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
