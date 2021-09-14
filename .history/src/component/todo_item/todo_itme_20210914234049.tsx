import React from "react";
import styles from "./todo_item.module.css";

type itemProps = {
  item: {
    id: string;
    type: string;
    title: string;
    text: string;
    url: string;
  };
};

const TodoItem = ({ item }: itemProps) => {
  return (
    <li className={styles.container}>
      <section className={styles.document}>
        <h2 className={styles.title}>{item.title}</h2>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="ReadBook"
          name="ReadBook"
        />
        <label htmlFor="ReadBook">{item.text}</label>
      </section>
      <button className={styles.exitbutton}>
        <i className="fas fa-times"></i>
      </button>
    </li>
  );
};

export default TodoItem;
