import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

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
      <footer className={styles.footer}>
        <div className={styles.footer_brand}>
          <Link className={styles.navbarBrand} to="/">
            E-Mart
          </Link>
        </div>
        {linkCategories.map((category, index) => (
          <div key={index} className={styles.footerCol}>
            <h5>{category.name}</h5>
            <ul className={styles.footerLinks}>
              {category.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link to={link.path}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
      <div className={styles.foobar}>
        <p>
          Created by <strong> Mansoor </strong>
          Copyright © 2024 . All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
