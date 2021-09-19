import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { DragItemType, itemProps, ItemTypes } from "../item/item";
import styles from "./image_item.module.css";

const ImageItem = ({ card, index, onDeleteItem, moveItem }: itemProps) => {
  const onClick = () => {
    onDeleteItem(card);
  };

  const ref: React.LegacyRef<HTMLDivElement> = useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.ITEM,
    hover(item: DragItemType, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect!.bottom - hoverBoundingRect!.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect!.top;

      moveItem(dragIndex, hoverIndex);
    },
  });

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ITEM,
    item: { id: card.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  drag(drop(ref));

  return (
    <li className={styles.list}>
      <div
        ref={ref}
        style={{ opacity: isDragging ? 0.5 : 1 }}
        className={styles.container}
      >
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
  );
};

export default ImageItem;
