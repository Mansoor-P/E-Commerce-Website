import React, { useState } from "react";
import { womanData } from "../data/woman";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const WomanPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  // Function to handle checkbox selection
  const companyHandler = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== brand));
    } else {
      setSelectedProduct([...selectedProduct, brand]);
    }
  };

  // Filter products based on selected brands
  const filteredProduct =
    selectedProduct.length === 0
      ? womanData
      : womanData.filter((product) => selectedProduct.includes(product.brand));

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar for company filters */}
          <div className="md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Filter by Brand</h2>
            {womanData.map((product) => (
              <div key={product.brand} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(product.brand)}
                    onChange={() => companyHandler(product.brand)}
                    className="mr-2"
                  />
                  {product.brand}
                </label>
              </div>
            ))}
          </div>

          {/* Product display section */}
          <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProduct.map((item) => (
              <div key={item.id} className="border p-4 rounded-lg">
                <Link to={`/woman/${item.id}`}>
                  <div className="mb-4">
                    <img className="w-full h-auto rounded-lg" src={item.image} alt="" />
                  </div>
                </Link>
                <div className="text-center font-semibold">
                  {item.brand}, {item.model}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WomanPage;
