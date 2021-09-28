import React, { memo, useCallback, useRef, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addItem } from "../../store";
import { ItemType } from "../item/item";
import styles from "./dialog.module.css";

type DialogProps = {
  FileInput: (props: any) => JSX.Element;
  type: string;
  setExitCiick: () => void;
  onSubmitItem: (item: ItemType) => void;
  dispatch: Dispatch;
};

const Dialog = memo(
  ({ FileInput, type, setExitCiick, onSubmitItem, dispatch }: DialogProps) => {
    const [url, setUrl] = useState<string | null>(null);

    const formRef = useRef<HTMLFormElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const urlRef = useRef<HTMLInputElement>(null);
    const todoRef = useRef<HTMLInputElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const onClick = () => {
      formRef.current!.reset();
      setExitCiick();
    };

    const uploadImage = useCallback((uploadUrl: string) => {
      setUrl(uploadUrl);
    }, []);

    const onSubmit = (event: React.FormEvent): void => {
      event.preventDefault();
      const item = {
        id: Date.now().toString(),
        type: type,
        title: titleRef.current!.value || "",
        text: (textareaRef.current && textareaRef.current.value) || "",
        url: url || (urlRef.current && urlRef.current.value) || "",
        todolist: (todoRef.current && [todoRef.current.value]) || [],
      };
      dispatch(addItem(item));
    };

    function typeSelector(type: string) {
      switch (type) {
        case "image":
          return (
            <>
              <h2 className={styles.title}>Memo</h2>
              <textarea
                ref={textareaRef}
                className={styles.textarea}
                name="area"
                cols={33}
                rows={5}
              ></textarea>
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
              <h2 className={styles.title}>Todo</h2>
              <input ref={todoRef} className={styles.input} type="text" />
            </>
          );
        default:
          throw new Error(`this is not valid type: ${type}`);
      }
    }

    return (
      <form ref={formRef} className={styles.container} onSubmit={onSubmit}>
        <button className={styles.exitbutton} onClick={onClick}>
          <i className="fas fa-times"></i>
        </button>
        <h2 className={styles.title}>Title</h2>
        <input ref={titleRef} className={styles.input} type="text" />
        {typeSelector(type)}
        <button className={styles.addbutton}>Add</button>
      </form>
    );
  }
);

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Dialog);
