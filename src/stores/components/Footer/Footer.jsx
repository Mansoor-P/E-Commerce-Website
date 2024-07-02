import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const linkCategories = [
    {
      name: "Home",
      links: [{ text: "Home", path: "/" }],
    },
    {
      name: "Important links",
      links: [{ text: "About Us", path: "/about_us" }],
    },
    {
      name: "Connect Me Here",
      links: [
        { text: "LinkedIn", path: "https://www.linkedin.com/in/mansoor0731/" },
        { text: "Git Hub", path: "https://www.github.com/Mansoor-P/" },
        { text: "Twitter", path: "https://twitter.com/mansoor0731" },
      ],
    },
  ];

  return (
    <>
      <footer className="bg-gray-800 text-white py-8 px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-brand">
            <Link
              className="text-2xl font-bold text-green-500 hover:text-yellow-400"
              to="/"
            >
              E-Mart
            </Link>
          </div>
          {linkCategories.map((category, index) => (
            <div key={index}>
              <h5 className="text-xl font-semibold mb-4">{category.name}</h5>
              <ul>
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <Link
                      className="text-gray-400 hover:text-white"
                      to={link.path}
                      target={link.path.startsWith("http") ? "_blank" : "_self"}
                      rel={link.path.startsWith("http") ? "noopener noreferrer" : ""}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="bg-gray-900 text-gray-500 py-4">
        <div className="container mx-auto text-center">
          <p>
            Created by <strong className="text-white">Mansoor</strong> Copyright © 2024. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
