import React, { useRef } from "react";
import styles from "./todo_item_add_form.module.css";

type TodoItemAddFromProps = {
  onAddItem(todo: string): void;
};

const TodoItemAddForm = ({ onAddItem }: TodoItemAddFromProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      onAddItem(inputRef.current!.value);
      inputRef.current!.value = "";
    }
    if (inputRef.current!.value === "") {
      console.log("a");
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
      <button className={styles.deletebutton}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default TodoItemAddForm;
