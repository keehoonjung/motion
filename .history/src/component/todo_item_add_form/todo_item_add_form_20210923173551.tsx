import React from "react";
import styles from "./todo_item_add_form.module.css";

const TodoItemAddForm = (props: any) => {
  return (
    <>
      <input className={styles.text} type="text" />
    </>
  );
};

export default TodoItemAddForm;
