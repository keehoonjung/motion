import React from "react";
import styles from "./todo_item.module.css";

const TodoItem = (props: any) => {
  return (
    <li className={styles.container}>
      <section className={styles.document}>
        <h2 className={styles.title}>Title</h2>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="ReadBook"
          name="ReadBook"
        />
        <label htmlFor="ReadBook">Read Book</label>
      </section>
    </li>
  );
};

export default TodoItem;
