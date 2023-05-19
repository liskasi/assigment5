import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.root}>
      <div className={styles.list}>
        <Link className={styles.link} to="/">
          Dashboard
        </Link>
        <Link className={styles.link} to="/ecofriendly-locations">
          Eco-friendly activities
        </Link>
      </div>
    </div>
  );
}

export default Header;
