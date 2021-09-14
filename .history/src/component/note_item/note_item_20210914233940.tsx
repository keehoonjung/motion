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

const NoteItem = (props: any) => {
  return (
    <li className={styles.container}>
      <section className={styles.document}>
        <h2 className={styles.title}>Title</h2>
        <p className={styles.text}>Hello this is good Note product man</p>
      </section>
    </li>
  );
};

export default NoteItem;
