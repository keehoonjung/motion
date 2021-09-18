import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { DragItemType, itemProps, ItemTypes } from "../item/item";
import styles from "./image_item.module.css";

const ImageItem = ({ item, onDeleteItem, moveItem }: itemProps) => {
  const onClick = () => {
    onDeleteItem(item);
  };

  const ref: React.LegacyRef<HTMLDivElement> = useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.ITEM,
    hover(dragitem: DragItemType, monitor) {
      if (!ref.current) {
        return;
      }
      console.log(dragitem);

      const dragId = dragitem.id;
      const hoverId = item.id;

      if (dragId === hoverId) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect!.bottom - hoverBoundingRect!.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect!.top;

      moveItem(dragId, hoverId);
    },
  });

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ITEM,
    dragitem: { id: item.id },
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
