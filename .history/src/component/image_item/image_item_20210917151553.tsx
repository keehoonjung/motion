import React from "react";
import { useDrag } from "react-dnd";
import { itemProps } from "../item/item";
import styles from "./image_item.module.css";

const ImageItem = ({ item, onDeleteItem }: itemProps) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "ITEM",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  const onClick = () => {
    onDeleteItem(item);
  };

  return (
    <li
      ref={dragPreview}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className={styles.container}
    >
      <img className={styles.img} src={item.url} alt="" />
      <div className={styles.description}>
        <h2 className={styles.title}>{item.title}</h2>
        <p className={styles.memo}> {item.text}</p>
      </div>
      <button className={styles.deletebutton} onClick={onClick}>
        <i className="fas fa-times"></i>
      </button>
    </li>
  );
};

export default ImageItem;
