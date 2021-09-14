import React from "react";
import Button from "../button/button";
import styles from "./header.module.css";

type HeaderProps = {
  setOnCilck: (type: string) => void;
};

const Header = ({ setOnCilck }: HeaderProps) => (
  <header className={styles.header}>
    <h1 className={styles.title}>MOTION</h1>
    <ul className={styles.button_container}>
      <li className={styles.button}>
        <Button name="IMAGE" type="url" setOnCilck={setOnCilck} />
      </li>
      <li className={styles.button}>
        <Button name="VIDEO" setOnCilck={setOnCilck} />
      </li>
      <li className={styles.button}>
        <Button name="NOTE" setOnCilck={setOnCilck} />
      </li>
      <li className={styles.button}>
        <Button name="TODO" setOnCilck={setOnCilck} />
      </li>
    </ul>
  </header>
);

export default Header;
