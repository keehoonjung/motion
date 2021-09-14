import React from "react";
import styles from "./dialog.module.css";

const Dialog = (props: any) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Title</h2>
      <input className={styles.input} type="text" />
      <h2 className={styles.title}>Url</h2>
      <input className={styles.input} type="text" />
    </section>
  );
};

export default Dialog;
