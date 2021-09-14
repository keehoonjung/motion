import React from "react";
import styles from "./button.module.css";

const Button = ({ name }: string) => {
  return <button>{name}</button>;
};

export default Button;
