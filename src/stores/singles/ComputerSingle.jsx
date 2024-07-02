import React from "react";
import { computerData } from "../data/computers";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

import { useCart } from "../context/CartContext";

const ComputerSingle = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = computerData.find((item) => item.id === id);

  return (
    <>
      <Navbar />
      <div className="ind-section">
        <div className="ind-image">
          <img className="w-full h-auto rounded-lg" src={product.image} alt="" />
        </div>
        <div className="ind-details space">
          <div className="ind-company">
            <h2>{product.company}</h2>
          </div>
          <div className="ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="ind-desc space">
            <p>{product.description}</p>
          </div>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ComputerSingle;
