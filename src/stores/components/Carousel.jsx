import React, { useState } from "react";

const images = [
  "/assets/2.jpg",
  "/assets/1.jpg",
  "/assets/g1.jpg",
  "/assets/g2.jpg",
  "/assets/b10.jpg",
  "/assets/b16.jpg",
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <img
              src={image}
              className="d-block w-full object-cover h-80 md:h-96 lg:h-120 rounded-lg"
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="carousel-thumbnails flex justify-center mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`carousel-thumbnail ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image}
              className="carousel-image w-12 h-12 object-cover rounded-full p-1"
              alt={`Thumbnail ${index + 1}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
