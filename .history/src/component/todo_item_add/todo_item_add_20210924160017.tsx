import React from "react";
import styles from "./todo_item_add.module.css";

type TodoItemAddProps = {
  text: string;
  index: string;
  onAddButton(): void;
};

const TodoItemAdd = ({ text, index, onAddButton }: TodoItemAddProps) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={index}
        name="ReadBook"
      />
      <label className={styles.text} htmlFor={index}>
        {text}
      </label>
      <button className={styles.addbutton} onClick={onAddButton}>
        <i className="fas fa-plus"></i>
      </button>
      <button className={styles.trashbutton} onClick={onAddButton}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default TodoItemAdd;
