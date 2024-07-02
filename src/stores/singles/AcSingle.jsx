import React from "react";
import { acData } from "../data/ac";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useCart } from "../context/CartContext";

const AcSingle = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Find the product based on id
  const product = acData.find((item) => item.id === id);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 md:p-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2 p-4 md:p-8">
            <img className="w-full h-auto rounded-lg" src={product.image} alt={product.model} />
          </div>
          <div className="md:w-1/2 p-4 md:p-8">
            <div className="ind-company mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{product.company}</h2>
            </div>
            <div className="ind-model mb-4">
              <h3 className="text-xl text-gray-700">{product.model}</h3>
            </div>
            <div className="ind-price mb-4">
              <h2 className="text-2xl font-bold text-green-500">{product.price}</h2>
            </div>
            <div className="ind-desc mb-4">
              <p className="text-base text-gray-600">{product.description}</p>
            </div>
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md transition duration-300"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcSingle;
