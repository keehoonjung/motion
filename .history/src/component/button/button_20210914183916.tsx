import React from "react";
import styles from "./button.module.css";

type ButtonProps ={
    name : string
}

const Button = ({ name }: ) => {
  return <button>{name}</button>;
};

export default Button;
