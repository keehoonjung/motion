import React, { memo, useRef } from "react";
import { TodoInterface } from "../item/item";
import styles from "./todo_item_add.module.css";

type TodoItemAddProps = {
  todo: TodoInterface;
  index: number;
  id: string;
  onAddButton(): void;
  onDeleteButton(index: number): void;
  onCheckedTodo(index: number, checked: boolean): void;
};

const TodoItemAdd = memo(
  ({
    todo,
    index,
    id,
    onAddButton,
    onDeleteButton,
    onCheckedTodo,
  }: TodoItemAddProps) => {
    const checkRef = useRef<HTMLInputElement>(null);
    const onClick = () => {
      const checked = checkRef.current!.checked;
      onCheckedTodo(index, checked);
      console.log(checkRef.current!.checked);
    };
    const onchange = () => {
      return todo.checked;
    };
    const onClickDeleteButton = () => {
      onDeleteButton(index);
    };
    return (
      <div className={styles.container}>
        <input
          ref={checkRef}
          className={styles.checkbox}
          type="checkbox"
          id={id}
          onClick={onClick}
          name="ReadBook"
          checked={onchange}
        />
        <label className={styles.text} htmlFor={id}>
          {todo.text}
        </label>
        <button className={styles.deletebutton} onClick={onClickDeleteButton}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    );
  }
);

export default TodoItemAdd;
