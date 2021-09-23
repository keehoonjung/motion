import React from "react";
import styles from "./todo_item_add.module.css";

type TodoItemAddProps = {
  title: string;
  text: string;
};

const TodoItemAdd = ({ title, text }: TodoItemAddProps) => {
  const onAddClick = () => {};
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="todo"
        name="ReadBook"
      />
      <label htmlFor="todo">{text}</label>
      <button className={styles.addbutton} onClick={onAddClick}>
        <i className="fas fa-plus"></i>
      </button>
    </>
  );
};

export default TodoItemAdd;
