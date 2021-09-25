import React, { memo } from "react";
import styles from "./todo_item_add.module.css";

type TodoItemAddProps = {
  text: string;
  index: number;
  id: string;
  onAddButton(): void;
  onDeleteButton(index: number): void;
};

const TodoItemAdd = memo(
  ({ text, index, id, onAddButton, onDeleteButton }: TodoItemAddProps) => {
    const onClickDeleteButton = () => {
      onDeleteButton(index);
    };
    return (
      <div className={styles.container}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id={id}
          name="ReadBook"
        />
        <label className={styles.text} htmlFor={id}>
          {text}
        </label>
        <button className={styles.deletebutton} onClick={onClickDeleteButton}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    );
  }
);

export default TodoItemAdd;
