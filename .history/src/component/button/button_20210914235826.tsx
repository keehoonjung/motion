import React from "react";
import styles from "./button.module.css";

type ButtonProps = {
  name: string;
};

const Button = ({ name }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
