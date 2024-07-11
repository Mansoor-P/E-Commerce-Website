import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductLinks from "../components/Navbar/ProductLinks";
import Footer from "../components/Footer/Footer";
import Products from "../components/Products/Products";
import Carousel from "../components/Carousel";
import Trending from "../components/Trending/Trending";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <ProductLinks />
      <Carousel/>
      <Trending/>
      <Products/>
      <Footer />
    </>
  );
};

export default LandingPage;
