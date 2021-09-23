import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import { itemProps } from "../item/item";
import TodoItemAdd from "../todo_item_add/todo_item_add";
import TodoItemAddForm from "../todo_item_add_form/todo_item_add_form";
import styles from "./todo_item.module.css";

type TodoItemProps = itemProps & {
  onAddTodoItem(item: ItemType, index: number, todo: string): void;
};

const TodoItem = memo(
  ({ card, index, onDeleteItem, onAddTodoItem }: TodoItemProps) => {
    const onClick = () => {
      onDeleteItem(card, index);
    };

    const onAddItem = (todo: string) => {};

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
                {card.todolist.map((todo, index) => (
                  <TodoItemAdd key={index} text={todo} />
                ))}
                <TodoItemAddForm onAddItem={onAddItem} />
              </section>
              <button className={styles.deletebutton} onClick={onClick}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </li>
        )}
      </Draggable>
    );
  }
);

export default TodoItem;
