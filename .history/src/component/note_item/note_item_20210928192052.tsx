import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import { DispatchProp } from "react-redux";
import { Dispatch } from "redux";
import { itemProps } from "../item/item";
import styles from "./note_item.module.css";

const NoteItem = memo(({ card, index, onDeleteItem }: itemProps) => {
  const onClick = () => {
    onDeleteItem(card, index);
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
              <pre className={styles.text}>{card.text}</pre>
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

export default NoteItem;
