import React from "react";
import { Link } from "react-router-dom";

const ProductComponent = ({ categoryData, categoryName,routeTo }) => {
  const firstFiveImages = categoryData.slice(0, 4);

  return (
    <div className="container mx-auto">
      <div className="py-8">
        <h2 className="text-2xl font-bold text-center mb-4">{categoryName}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {firstFiveImages.map((item) => (
            <div key={item.id}>
              {/* <h2>{categoryName}</h2> */}
              <Link to={`/${routeTo}`}>
                <img className="w-full h-auto rounded-lg" src={item.image} alt="" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProductComponent;
