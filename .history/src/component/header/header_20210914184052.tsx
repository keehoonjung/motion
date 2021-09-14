import React from "react";
import Button from "../button/button";
import styles from "./header.module.css";

const Header = (props: any) => (
  <header>
    <h1 className={styles.title}>MOTION</h1>
    <ul>
      <li>
        <Button name="image" />
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </header>
);

export default Header;
