import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart(); 

  return (
    <div className={styles.navbarSection}>
      <div className={styles.navSection}>
        <Link to="/" className={styles.customLink}>
          <div className={styles.title}>
            <h2>E-Mart</h2>
          </div>
        </Link>

        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
        </div>
        <div className={styles.user}>
          <div className={styles.userDetail}>SignIN/SignUp</div>
        </div>
        <Link to="/cart" className={styles.customLink}>
          <div className={styles.cart}>
            Cart 
            <span>{cartItems.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
