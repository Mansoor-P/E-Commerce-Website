import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductLinks.module.css";

const ProductLinks = () => {
  return (
    <div className={styles.subMenu}>
      <ul>
        <Link to="/mobiles" className={styles.customLink}>
          <li>Mobiles</li>
        </Link>

        <Link to="/computers" className={styles.customLink}>
          <li>Computers</li>
        </Link>

        <Link to="/watch" className={styles.customLink}>
          <li>Watches</li>
        </Link>

        <Link to="/men" className={styles.customLink}>
          <li>Mens Wear</li>
        </Link>

        <Link to="/woman" className={styles.customLink}>
          <li>Woman Wear</li>
        </Link>

        <Link to="/furniture" className={styles.customLink}>
          <li>Furniture</li>
        </Link>

        <Link to="/kitchen" className={styles.customLink}>
          <li>Kitchen</li>
        </Link>

        <Link to="/fridge" className={styles.customLink}>
          <li>Fridge</li>
        </Link>

        <Link to="/books" className={styles.customLink}>
          <li>Books</li>
        </Link>

        <Link to="/speakers" className={styles.customLink}>
          <li>Speakers</li>
        </Link>

        <Link to="/tv" className={styles.customLink}>
          <li>TV's</li>
        </Link>

        <Link to="/ac" className={styles.customLink}>
          <li>AC</li>
        </Link>
      </ul>
    </div>
  );
};

export default ProductLinks;
