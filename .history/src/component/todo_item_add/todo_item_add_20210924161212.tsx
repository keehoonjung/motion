import React from "react";
import styles from "./todo_item_add.module.css";

type TodoItemAddProps = {
  text: string;
  index: number;
  id: string;
  onAddButton(): void;
  onDeleteButton(id: string): void;
};

const TodoItemAdd = ({
  text,
  index,
  onAddButton,
  onDeleteButton,
}: TodoItemAddProps) => {
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
      <button className={styles.addbutton} onClick={onAddButton}>
        <i className="fas fa-plus"></i>
      </button>
      <button className={styles.deletebutton} onClick={onClickDeleteButton}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default TodoItemAdd;
