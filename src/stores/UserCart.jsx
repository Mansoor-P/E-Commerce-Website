import React from "react";
import { useCart } from "../stores/context/CartContext";
import Navbar from "./components/Navbar/Navbar";

const UserCart = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your Cart is Empty</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex items-center"
              >
                <div className="w-1/3">
                  <img
                    src={item.image}
                    alt={item.product}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="w-2/3 p-4">
                  <h3 className="text-xl font-bold mb-2">{item.product}</h3>
                  <p className="text-gray-700 mb-2">{item.model}</p>
                  <p className="text-gray-800 font-bold">${item.price}</p>
                  <button
                    className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md focus:outline-none"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UserCart;
