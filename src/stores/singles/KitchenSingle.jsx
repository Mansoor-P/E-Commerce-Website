import React from "react";
import { kitchenData } from "../data/kitchen";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

import { useCart } from "../context/CartContext";

const KitchenSingle = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = kitchenData.find((item) => item.id === id);

  return (
    <>
      <Navbar />
      <div className="ind-section grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="ind-image">
          <img className="w-full h-auto rounded-lg" src={product.image} alt="" />
        </div>
        <div className="ind-details">
          <div className="ind-company">
            <h2>{product.brand}</h2>
          </div>
          <div className="ind-model">
            <h3>{product.model}</h3>
          </div>
          <div className="ind-price">
            <h2>{product.price}</h2>
          </div>
          <div className="ind-desc">
            <p>{product.description}</p>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default KitchenSingle;
