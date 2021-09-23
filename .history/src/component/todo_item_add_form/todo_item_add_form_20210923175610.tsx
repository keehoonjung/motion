import React from "react";
import styles from "./todo_item_add_form.module.css";

const TodoItemAddForm = (props: any) => {
  const onSubmit = (event: KeyboardEvent) => {
    console.log("hl");
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="todo"
        name="ReadBook"
      />
      <input className={styles.text} type="text" onKeyDown={onSubmit} />
    </div>
  );
};

export default TodoItemAddForm;
