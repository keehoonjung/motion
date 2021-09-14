import React, { useRef } from "react";
import styles from "./dialog.module.css";

type DialogProps = {
  type: string;
};

const Dialog = ({ type }: DialogProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onClick = () => {
    titleRef.current?.value = "";
  };

  return (
    <section className={styles.container}>
      <button className={styles.exitbutton} onClick={onClick}>
        <i className="fas fa-times"></i>
      </button>
      <h2 className={styles.title}>Title</h2>
      <input ref={titleRef} className={styles.input} type="text" />
      {type === "url" ? (
        <>
          <h2 className={styles.title}>Url</h2>
          <input ref={urlRef} className={styles.input} type="text" />
        </>
      ) : (
        <>
          <h2 className={styles.title}>Body</h2>
          <textarea
            ref={textareaRef}
            className={styles.textarea}
            name="area"
            cols={33}
            rows={5}
          ></textarea>
        </>
      )}
      <button className={styles.addbutton}>Add</button>
    </section>
  );
};

export default Dialog;
