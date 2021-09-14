import React from "react";
import { itemProps } from "../item/item";
import styles from "./note_item.module.css";

const NoteItem = ({ item, onDeleteItem }: itemProps) => {
  const onClick = () => {
    onDeleteItem(item);
  };

  return (
    <li className={styles.container}>
      <section className={styles.document}>
        <h2 className={styles.title}>{item.title}</h2>
        <p className={styles.text}>{item.text}</p>
      </section>
      <button className={styles.deletebutton}>
        <i className="fas fa-times"></i>
      </button>
    </li>
  );
};

export default NoteItem;
