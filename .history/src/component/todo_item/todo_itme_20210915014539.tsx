import React from "react";
import { itemProps } from "../item/item";
import styles from "./todo_item.module.css";

const TodoItem = ({ item, onDeleteItem }: itemProps) => {
  const onClick = () => {
    onDeleteItem(item);
  };

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
      <button className={styles.deletebutton} onClick={onClick}>
        <i className="fas fa-times"></i>
      </button>
    </li>
  );
};

export default TodoItem;
