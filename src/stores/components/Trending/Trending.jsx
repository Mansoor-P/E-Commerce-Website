import React from "react";
import { trending } from "../../data/trending";

const Trending = () => {
  const firstEightImages = trending.slice(0, 8);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Trending Shopping</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {firstEightImages.map((item) => {
          return (
            <div key={item.id} className="flex justify-center">
              <img className="w-48 md:w-48 lg:w-64" src={item.image} alt={item.category} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
