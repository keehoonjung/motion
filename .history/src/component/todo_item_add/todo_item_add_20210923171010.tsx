import React from "react";
import styles from "./todo_item_add.module.css";

type TodoItemAddProps = {
  text: string;
};

const TodoItemAdd = ({ text }: TodoItemAddProps) => {
  const onAddClick = () => {};
  return (
    <>
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
