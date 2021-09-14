import React from "react";
import styles from "./todo_item.module.css";

const TodoItem = (props: any) => {
  return (
    <li className={styles.container}>
      <h2 className={styles.title}>Title</h2>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="ReadBook"
        name="ReadBook"
      />
      <label for="ReadBook">Read Book</label>
    </li>
  );
};

export default TodoItem;
