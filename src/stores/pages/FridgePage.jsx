import React, { useState } from "react";
import { fridgeData } from "../data/fridge";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import '../../App.css'; // Import the custom CSS

const FridgePage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (company) => {
    if (selectedProduct.includes(company)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== company));
    } else {
      setSelectedProduct([...selectedProduct, company]);
    }
  };

  const filteredProduct =
    selectedProduct.length === 0
      ? fridgeData
      : fridgeData.filter((product) => selectedProduct.includes(product.brand));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="flex-container">
          <div className="sidebar">
            <h2 className="heading">Filter by Brand</h2>
            {fridgeData.map((product) => (
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
                <Link to={`/fridge/${item.id}`}>
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

export default FridgePage;
