import React from "react";
import styles from "./button.module.css";

type ButtonProps = {
  name: string;
  type: string;
  setOnCilck: (type: string) => void;
};

const Button = ({ name, setOnCilck }: ButtonProps) => {
  const onClick = () => {
    setOnCilck(name);
  };
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
