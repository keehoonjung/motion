import React, { memo, useRef } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDrag, useDrop } from "react-dnd";
import { DragItemType, itemProps, ItemTypes } from "../item/item";
import styles from "./image_item.module.css";

const ImageItem = memo(({ card, index, onDeleteItem, moveItem }: itemProps) => {
  const ref: React.LegacyRef<HTMLLIElement> = useRef(null);

  const onClick = () => {
    onDeleteItem(card, index);
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ITEM,
    item: { id: card.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

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

      console.log("hover image");
      console.log(`drag : ${dragIndex}`);
      console.log(`hover : ${hoverIndex}`);

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <li
          ref={ref}
          style={{ opacity: isDragging ? 0.5 : 1 }}
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
