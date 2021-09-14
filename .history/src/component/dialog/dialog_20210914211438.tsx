import React from "react";
import styles from "./dialog.module.css";

const Dialog = (props: any) => {
  return (
    <section className={styles.container}>
      <button className={styles.exitbutton}>
        <i class="fas fa-times"></i>
      </button>
      <h2 className={styles.title}>Title</h2>
      <input className={styles.input} type="text" />
      <h2 className={styles.title}>Url</h2>
      <input className={styles.input} type="text" />
      <button className={styles.addbutton}>Add</button>
    </section>
  );
};

export default Dialog;
