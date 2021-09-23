import React from "react";
import styles from "./todo_item_add.module.css";

type TodoItemAddProps = {
  text: string;
  onAddButton(): void;
};

const TodoItemAdd = ({ text, onAddButton }: TodoItemAddProps) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="todo"
        name="ReadBook"
      />
      <label className={styles.text} htmlFor="todo">
        {text}
      </label>
      <button className={styles.addbutton} onClick={onAddButton}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoItemAdd;
