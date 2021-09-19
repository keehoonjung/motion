import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { DragItemType, itemProps, ItemTypes } from "../item/item";
import styles from "./todo_item.module.css";

const TodoItem = ({ card, index, onDeleteItem, moveItem }: itemProps) => {
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

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

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
        <section className={styles.document}>
          <h2 className={styles.title}>{card.title}</h2>
          <input
            className={styles.checkbox}
            type="checkbox"
            id="ReadBook"
            name="ReadBook"
          />
          <label htmlFor="ReadBook">{card.text}</label>
        </section>
        <button className={styles.deletebutton} onClick={onClick}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
