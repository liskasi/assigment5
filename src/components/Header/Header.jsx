import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.root}>
      <div className={styles.list}>
        <a className={styles.link} href="/">
          Dashboard
        </a>
        <a className={styles.link} href="/ecofriendly-locations">
          Eco-friendly activities
        </a>
      </div>
    </div>
  );
}

export default Header;
