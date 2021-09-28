import React, { memo, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { deleteItem } from "../../store";
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
    item,
    index,

    onAddTodoItem,
    onDeleteTodoItem,
    dispatch,
  }: TodoItemProps) => {
    const [addTodo, setAddTodo] = useState(false);
    const onClick = () => {
      dispatch(deleteItem({ index, item }));
    };

    const onAddItem = (todo: string) => {
      onAddTodoItem(item, todo);
    };

    const onAddButton = () => {
      setAddTodo(true);
    };

    const offAddForm = () => {
      setAddTodo(false);
    };

    const onDeleteButton = (index: number) => {
      onDeleteTodoItem(item, index);
    };

    return (
      <Draggable draggableId={item.id} index={index}>
        {(provided) => (
          <li
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={styles.list}
          >
            <div className={styles.container}>
              <section className={styles.document}>
                <div className={styles.title}>
                  <h2 className={styles.title__text}>{item.title}</h2>
                  <button
                    className={styles.title__addbutton}
                    onClick={onAddButton}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                {item.todolist &&
                  item.todolist.map((todo, index) => (
                    <TodoItemAdd
                      key={index}
                      text={todo}
                      index={index}
                      id={`${item.id} ${index.toString()}`}
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

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(TodoItem);
