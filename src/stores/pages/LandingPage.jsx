import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductLinks from "../components/Navbar/ProductLinks";
import Footer from "../components/Footer/Footer";
import Products from "../components/Products/Products";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <ProductLinks />
      <Products/>
      <Footer />
    </>
  );
};

export default LandingPage;
