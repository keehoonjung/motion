import React, { memo, useRef } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDrag, useDrop } from "react-dnd";
import { DragItemType, itemProps, ItemTypes } from "../item/item";
import styles from "./todo_item.module.css";

const TodoItem = memo(({ card, index, onDeleteItem, moveItem }: itemProps) => {
  const ref: React.LegacyRef<HTMLLIElement> = useRef(null);

  const onClick = () => {
    onDeleteItem(card, index);
  };

  // const [, drop] = useDrop({
  //   accept: ItemTypes.ITEM,
  //   hover(item: DragItemType, monitor) {
  //     if (!ref.current) {
  //       return;
  //     }

  //     const dragIndex = item.index;
  //     const hoverIndex = index;

  //     if (dragIndex === hoverIndex) {
  //       return;
  //     }

  //     const hoverBoundingRect = ref.current?.getBoundingClientRect();
  //     const hoverMiddleY =
  //       (hoverBoundingRect!.bottom - hoverBoundingRect!.top) / 2;
  //     const clientOffset = monitor.getClientOffset();
  //     const hoverClientY = clientOffset!.y - hoverBoundingRect!.top;

  //     console.log("hover todo");

  //     if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
  //       return;
  //     }

  //     if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
  //       return;
  //     }

  //     moveItem(dragIndex, hoverIndex);
  //     item.index = hoverIndex;
  //   },
  // });

  // const [{ isDragging }, drag] = useDrag(() => ({
  //   type: ItemTypes.ITEM,
  //   item: { id: card.id, index },
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  // }));

  // drag(drop(ref));

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
      )}
    </Draggable>
  );
});

export default TodoItem;
