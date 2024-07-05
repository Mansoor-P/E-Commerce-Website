import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductLinks from "../components/Navbar/ProductLinks";
import Footer from "../components/Footer/Footer";
import Products from "../components/Products/Products";
import Carousel from "../components/Carousel";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <ProductLinks />
      <Carousel/>
      <Products/>
      <Footer />
    </>
  );
};

export default LandingPage;
