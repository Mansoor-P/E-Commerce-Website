import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

const categories = [
  {
    name: "Fashion",
    subCategories: [
      { name: "Men's Fashion", path: "/men" },
      { name: "Women's Fashion", path: "/woman" },
    ],
  },
  {
    name: "Electronics",
    subCategories: [
      { name: "Mobiles", path: "/mobiles" },
      { name: "Computers", path: "/computers" },
      { name: "TVs", path: "/tv" },
      { name: "Speakers", path: "/speakers" },
      { name: "AC", path: "/ac" },
    ],
  },
  {
    name: "Home Appliances",
    subCategories: [
      { name: "Fridge", path: "/fridge" },
      { name: "Kitchen", path: "/kitchen" },
    ],
  },
  {
    name: "Furniture",
    subCategories: [{ name: "Furniture", path: "/furniture" }],
  },
  {
    name: "Books",
    subCategories: [{ name: "Books", path: "/books" }],
  },
  {
    name: "Watches",
    subCategories: [{ name: "Watches", path: "/watch" }],
  },
];

const ProductLinks = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (index) => {
    if (activeCategory === index) {
      setActiveCategory(null);
    } else {
      setActiveCategory(index);
    }
  };

  return (
    <div className="bg-white shadow-md p-4 my-2">
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="relative group">
            <div
              className="flex items-center text-gray-600 hover:text-primary cursor-pointer"
              onClick={() => toggleCategory(index)}
            >
              {activeCategory === index ? (
                <FaAngleDown className="mr-2" />
              ) : (
                <FaAngleRight className="mr-2" />
              )}
              <li className="py-2">{category.name}</li>
            </div>
            {activeCategory === index && (
              <ul className="absolute left-0 top-full mt-1 bg-white border border-gray-200 shadow-lg z-10">
                {category.subCategories.map((subCategory, subIndex) => (
                  <li key={subIndex} className="py-2 px-4 hover:bg-gray-100">
                    <Link
                      to={subCategory.path}
                      className="text-gray-600 hover:text-primary"
                    >
                      {subCategory.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductLinks;
