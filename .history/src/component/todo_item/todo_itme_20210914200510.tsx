import React from "react";
import styles from "./todo_item.module.css";

const TodoItem = (props: any) => {
  return (
    <li className={styles.container}>
      <h2 className={styles.title}>Title</h2>
      <input type="checkbox" />
    </li>
  );
};

export default TodoItem;
