import React from "react";
import { useDrop } from "react-dnd";
import { itemProps, ItemType, ItemTypes } from "../item/item";
import styles from "./image_item.module.css";

const ImageItem = ({ item, onDeleteItem }: itemProps) => {
  const onClick = () => {
    onDeleteItem(item);
  };

  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.ITEM,
    hover(dragitem: ItemType, monitor) {
      if (!ref.curent) {
        return;
      }

      const dragId = dragitem.id;
      const hoverId = item.id;

      if (dragId === hoverId) {
        return;
      }
    },
  });

  return (
    <li className={styles.list}>
      <div className={styles.container}>
        <img className={styles.img} src={item.url} alt="" />
        <div className={styles.description}>
          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.memo}> {item.text}</p>
        </div>
        <button className={styles.deletebutton} onClick={onClick}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </li>
  );
};

export default ImageItem;
