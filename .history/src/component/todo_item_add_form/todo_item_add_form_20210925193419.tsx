import React, { useRef } from "react";
import styles from "./todo_item_add_form.module.css";

type TodoItemAddFromProps = {
  onAddItem(todo: string): void;
  offAddForm(): void;
};

const TodoItemAddForm = ({ onAddItem }: TodoItemAddFromProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputRef.current!.value !== "" && event.code === "Enter") {
      onAddItem(inputRef.current!.value);
      inputRef.current!.value = "";
    }
    if (inputRef.current!.value === "" && event.code === "Backspace") {
      console.log("Hello");
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
        onKeyUp={onSubmit}
      />
    </div>
  );
};

export default TodoItemAddForm;
