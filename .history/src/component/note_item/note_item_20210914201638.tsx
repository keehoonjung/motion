import React from "react";
import styles from "./note_item.module.css";

const NoteItem = (props: any) => {
  return (
    <li className={styles.container}>
      <section className={styles.document}>
        <h2 className={styles.title}>Title</h2>
        <p>
          Hello this is good Note product man QQQQQQQQQQ
          xxsdssssssaaaaaasdasl;dk;lkxc;jzxlkcjzxklcjklzxjcklzxjclkzxjclkzxc
          zxlckjzxlkjcklzxjclk asjdklasjdkl
        </p>
      </section>
    </li>
  );
};

export default NoteItem;
