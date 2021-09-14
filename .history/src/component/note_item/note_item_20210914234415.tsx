import React from "react";
import styles from "./note_item.module.css";

type itemProps = {
  item: {
    id: string;
    type: string;
    title: string;
    text: string;
    url: string;
  };
};

const NoteItem = ({ item }: itemProps) => {
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
