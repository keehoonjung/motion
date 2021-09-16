import React from "react";
import Button from "../button/button";
import styles from "./header.module.css";

type HeaderProps = {
  setOnCilck: (type: string) => void;
};

const Header = ({ setOnCilck }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>MOTION</h1>
      <button className={styles.logout} onClick={onLogout}>
        logout
      </button>
      <ul className={styles.button_container}>
        <li className={styles.button}>
          <Button name="IMAGE" type="image" setOnCilck={setOnCilck} />
        </li>
        <li className={styles.button}>
          <Button name="VIDEO" type="video" setOnCilck={setOnCilck} />
        </li>
        <li className={styles.button}>
          <Button name="NOTE" type="note" setOnCilck={setOnCilck} />
        </li>
        <li className={styles.button}>
          <Button name="TODO" type="todo" setOnCilck={setOnCilck} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
