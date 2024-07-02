import React, { useState } from "react";
import { furnitureData } from "../data/furniture";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import '../../App.css'; // Import the custom CSS

const FurniturePage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== brand));
    } else {
      setSelectedProduct([...selectedProduct, brand]);
    }
  };

  const filteredProduct =
    selectedProduct.length === 0
      ? furnitureData
      : furnitureData.filter((product) => selectedProduct.includes(product.brand));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="flex-container">
          <div className="sidebar">
            <h2 className="heading">Filter by Brand</h2>
            {furnitureData.map((product) => (
              <div key={product.brand} className="checkbox-container">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(product.brand)}
                    onChange={() => companyHandler(product.brand)}
                    className="checkbox-input"
                  />
                  {product.brand}
                </label>
              </div>
            ))}
          </div>
          <div className="product-grid">
            {filteredProduct.map((item) => (
              <div key={item.id} className="product-card">
                <Link to={`/furniture/${item.id}`}>
                  <div>
                    <img className="product-image" src={item.image} alt="" />
                  </div>
                </Link>
                <div className="product-model">
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

export default FurniturePage;
