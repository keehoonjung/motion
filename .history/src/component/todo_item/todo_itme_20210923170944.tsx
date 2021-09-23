import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import { itemProps } from "../item/item";
import TodoItemAdd from "../todo_item_add/todo_item_add";
import styles from "./todo_item.module.css";

const TodoItem = memo(({ card, index, onDeleteItem }: itemProps) => {
  const onClick = () => {
    onDeleteItem(card, index);
  };

  const onAddClick = () => {};

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={styles.list}
        >
          <div className={styles.container}>
            <section className={styles.document}>
              <h2 className={styles.title}>{title}</h2>
              <TodoItemAdd title={card.title} text={card.text} />
            </section>
            <button className={styles.deletebutton} onClick={onClick}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </li>
      )}
    </Draggable>
  );
});

export default TodoItem;
