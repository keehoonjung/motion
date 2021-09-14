import React from "react";
import styles from "./dialog.module.css";

const Dialog = (props: any) => {
  return (
    <div className={styles.background}>
      <section className={styles.container}>
        <h2 className={styles.title}>TITLE</h2>
        <input className={styles.input} type="text" />
        <h2 className={styles.title}>URL</h2>
        <input className={styles.input} type="text" />
      </section>
    </div>
  );
};

export default Dialog;
