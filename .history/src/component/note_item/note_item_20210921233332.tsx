import React, { memo, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { DragItemType, itemProps, ItemTypes } from "../item/item";
import styles from "./note_item.module.css";

const NoteItem = memo(({ card, index, onDeleteItem, moveItem }: itemProps) => {
  const ref: React.LegacyRef<HTMLLIElement> = useRef(null);

  const onClick = () => {
    onDeleteItem(card, index);
  };

  return (
    <li
      ref={ref}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className={styles.list}
    >
      <div className={styles.container}>
        <section className={styles.document}>
          <h2 className={styles.title}>{card.title}</h2>
          <p className={styles.text}>{card.text}</p>
        </section>
        <button className={styles.deletebutton} onClick={onClick}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </li>
  );
});

export default NoteItem;
