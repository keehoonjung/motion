import React, { useRef } from "react";
import styles from "./todo_item_add_form.module.css";

type TodoItemAddFromProps = {
  onAddItem(todo: string): void;
};

const TodoItemAddForm = ({ onAddItem }: TodoItemAddFromProps) => {
  const inputRef = useRef<HTMLInputElement>();
  const onSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      console.log("hello");
    }
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="todo"
        name="ReadBook"
      />
      <input
        ref={inputRef}
        className={styles.text}
        type="text"
        onKeyDown={onSubmit}
      />
    </div>
  );
};

export default TodoItemAddForm;
