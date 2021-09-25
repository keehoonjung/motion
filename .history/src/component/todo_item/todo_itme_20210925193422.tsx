import React, { memo, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { itemProps, ItemType } from "../item/item";
import TodoItemAdd from "../todo_item_add/todo_item_add";
import TodoItemAddForm from "../todo_item_add_form/todo_item_add_form";
import styles from "./todo_item.module.css";

type TodoItemProps = itemProps & {
  onAddTodoItem(item: ItemType, todo: string): void;
  onDeleteTodoItem(item: ItemType, index: number): void;
};

const TodoItem = memo(
  ({
    card,
    index,
    onDeleteItem,
    onAddTodoItem,
    onDeleteTodoItem,
  }: TodoItemProps) => {
    const [addTodo, setAddTodo] = useState(false);
    const onClick = () => {
      onDeleteItem(card, index);
    };

    const onAddItem = (todo: string) => {
      onAddTodoItem(card, todo);
    };

    const onAddButton = () => {
      setAddTodo(true);
    };

    const offAddForm = () => {
      setAddTodo(false);
    };

    const onDeleteButton = (index: number) => {
      onDeleteTodoItem(card, index);
    };

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
                  <TodoItemAdd
                    key={index}
                    text={todo}
                    index={index}
                    id={`${card.id} ${index.toString()}`}
                    onAddButton={onAddButton}
                    onDeleteButton={onDeleteButton}
                  />
                ))}
                {addTodo && (
                  <TodoItemAddForm
                    onAddItem={onAddItem}
                    offAddForm={offAddForm}
                  />
                )}
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
