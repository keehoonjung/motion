import React from "react";
import styles from "./button.module.css";

type ButtonProps = {
  name: string;
  type: string;
  setOnCilck: (type: string) => void;
};

const Button = ({ name, type, setOnCilck }: ButtonProps) => {
  const onClick = () => {
    setOnCilck(type);
  };
  return (
    <button className={styles.button} onClick={setOnCilck(type)}>
      {name}
    </button>
  );
};

export default Button;
