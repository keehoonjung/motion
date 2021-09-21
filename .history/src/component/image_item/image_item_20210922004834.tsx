import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import { itemProps } from "../item/item";
import styles from "./image_item.module.css";

const ImageItem = memo(({ card, index, onDeleteItem }: itemProps) => {
  // const ref: React.LegacyRef<HTMLLIElement> = useRef(null);

  const onClick = () => {
    onDeleteItem(card, index);
  };

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={styles.list}
        >
          <div className={styles.container}>
            <img className={styles.img} src={card.url} alt="" />
            <div className={styles.description}>
              <h2 className={styles.title}>{card.title}</h2>
              <p className={styles.memo}> {card.text}</p>
            </div>
            <button className={styles.deletebutton} onClick={onClick}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </li>
      )}
    </Draggable>
  );
});

export default ImageItem;
