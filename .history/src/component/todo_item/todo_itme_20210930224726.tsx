import React, { memo, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { deleteItem, addTodo, deleteTodo, checkedTodo } from "../../store";
import { itemProps, TodoInterface } from "../item/item";
import TodoItemAdd from "../todo_item_add/todo_item_add";
import TodoItemAddForm from "../todo_item_add_form/todo_item_add_form";
import styles from "./todo_item.module.css";

const TodoItem = memo(({ item, index, dispatch }: itemProps) => {
  const [onAddForm, setonAddForm] = useState(false);
  const onClick = () => {
    dispatch(deleteItem({ index, item }));
  };

  const onAddItem = (text: string) => {
    const todo = { text, checked: false };
    dispatch(addTodo({ item, todo }));
  };

  const onDeleteButton = (index: number) => {
    dispatch(deleteTodo({ item, index }));
  };

  const onCheckedTodo = (todo: TodoInterface, checked: boolean) => {
    dispatch(checkedTodo({ item, todo, checked }));
  };

  const onAddButton = () => {
    setonAddForm(true);
  };

  const offAddForm = () => {
    setonAddForm(false);
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
                    todo={todo}
                    index={index}
                    id={`${item.id} ${index.toString()}`}
                    onAddButton={onAddButton}
                    onDeleteButton={onDeleteButton}
                    onCheckedTodo={onCheckedTodo}
                  />
                ))}
              {onAddForm && (
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
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(TodoItem);
