import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import { itemProps } from "../item/item";
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
              <h2 className={styles.title}>{card.title}</h2>
              <input
                className={styles.checkbox}
                type="checkbox"
                id="todo"
                name="ReadBook"
              />
              <label htmlFor="todo">{card.text}</label>
              <button className={styles.addbutton} onClick={onAddClick}>
                <i className="fas fa-plus"></i>
              </button>
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
