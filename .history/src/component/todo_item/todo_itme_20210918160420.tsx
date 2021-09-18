import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { DragItemType, itemProps, ItemType, ItemTypes } from "../item/item";
import styles from "./todo_item.module.css";

const TodoItem = ({ item, onDeleteItem }: itemProps) => {
  const onClick = () => {
    onDeleteItem(item);
  };

  const ref: React.LegacyRef<HTMLDivElement> = useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.ITEM,
    hover(item: DragItemType, monitor) {
      if (!ref.current) {
        return;
      }

      const dragId = item.id;
      const hoverId = card.id;

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
    item: { id: card.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  drag(drop(ref));

  return (
    <li className={styles.container}>
      <section className={styles.document}>
        <h2 className={styles.title}>{item.title}</h2>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="ReadBook"
          name="ReadBook"
        />
        <label htmlFor="ReadBook">{item.text}</label>
      </section>
      <button className={styles.deletebutton} onClick={onClick}>
        <i className="fas fa-times"></i>
      </button>
    </li>
  );
};

export default TodoItem;
