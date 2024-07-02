import React, { useState } from "react";
import { mobileData } from "../data/mobiles";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import '../../App.css'; // Import the custom CSS

const MobilePage = () => {
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
      ? mobileData
      : mobileData.filter((product) => selectedProduct.includes(product.company));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="flex-container">
          <div className="sidebar">
            <h2 className="heading">Filter by Company</h2>
            {mobileData.map((product) => (
              <div key={product.company} className="checkbox-container">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(product.company)}
                    onChange={() => companyHandler(product.company)}
                    className="checkbox-input"
                  />
                  {product.company}
                </label>
              </div>
            ))}
          </div>
          <div className="product-grid">
            {filteredProduct.map((item) => (
              <div key={item.id} className="product-card">
                <Link to={`/mobiles/${item.id}`}>
                  <div>
                    <img className="product-image" src={item.image} alt="" />
                  </div>
                </Link>
                <div className="product-model">
                  {item.company}, {item.model}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobilePage;
