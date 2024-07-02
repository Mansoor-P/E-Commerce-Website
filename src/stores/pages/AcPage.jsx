import React, { useState } from "react";
import { acData } from "../data/ac";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import '../../App.css'; // Import the custom CSS

const AcPage = () => {
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
      ? acData
      : acData.filter((product) => selectedProduct.includes(product.company));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="flex-container">
          <div className="sidebar">
            <h2 className="heading">Filter by Company</h2>
            {acData.map((phone) => (
              <div key={phone.company} className="checkbox-container">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(phone.company)}
                    onChange={() => companyHandler(phone.company)}
                    className="checkbox-input"
                  />
                  {phone.company}
                </label>
              </div>
            ))}
          </div>
          <div className="product-grid">
            {filteredProduct.map((item) => (
              <div key={item.id} className="product-card">
                <Link to={`/ac/${item.id}`}>
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

export default AcPage;
