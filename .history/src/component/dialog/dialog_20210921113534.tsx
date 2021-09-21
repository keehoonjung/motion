import React, { useRef, useState } from "react";
import { ItemType } from "../item/item";
import styles from "./dialog.module.css";

type DialogProps = {
  FileInput: (props: any) => JSX.Element;
  type: string;
  setExitCiick: () => void;
  onSubmitItem: (item: ItemType) => void;
};

const Dialog = ({
  FileInput,
  type,
  setExitCiick,
  onSubmitItem,
}: DialogProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [url, setUrl] = useState<string | null>(null);

  const onClick = () => {
    formRef.current!.reset();
    setExitCiick();
  };

  const uploadImage = (uploadUrl: string) => {
    setUrl(uploadUrl);
  };

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const item = {
      id: Date.now(),
      type: type,
      title: titleRef.current!.value || "",
      text: (textareaRef.current && textareaRef.current.value) || "",
      url: url || (urlRef.current && urlRef.current.value) || "",
    };
    console.log(item);
    onSubmitItem(item);
  };

  function typeSelector(type: string) {
    switch (type) {
      case "image":
        return (
          <>
            <h2 className={styles.title}>Url</h2>
            <input ref={urlRef} className={styles.input} type="text" />
            <FileInput uploadImage={uploadImage} />
          </>
        );
      case "video":
        return (
          <>
            <h2 className={styles.title}>Url</h2>
            <input ref={urlRef} className={styles.input} type="text" />
          </>
        );
      case "note":
        return (
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
        );
      case "todo":
        return (
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
        );
      default:
        throw new Error(`this is not valid type: ${type}`);
    }
    // if (type === "image" || type === "video") {
    //   return (
    //     <>
    //       <h2 className={styles.title}>Url</h2>
    //       <input ref={urlRef} className={styles.input} type="text" />
    //     </>
    //   );
    // } else {
    //   return (
    //     <>
    //       <h2 className={styles.title}>Body</h2>
    //       <textarea
    //         ref={textareaRef}
    //         className={styles.textarea}
    //         name="area"
    //         cols={33}
    //         rows={5}
    //       ></textarea>
    //     </>
    //   );
    // }
  }

  return (
    <form ref={formRef} className={styles.container}>
      <button className={styles.exitbutton} onClick={onClick}>
        <i className="fas fa-times"></i>
      </button>
      <h2 className={styles.title}>Title</h2>
      <input ref={titleRef} className={styles.input} type="text" />
      {typeSelector(type)}
      <button className={styles.addbutton} onClick={onSubmit}>
        Add
      </button>
    </form>
  );
};

export default Dialog;
