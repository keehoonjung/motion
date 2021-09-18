import React from "react";
import { itemProps } from "../item/item";
import styles from "./video_item.module.css";

const VideoItem = ({ item, onDeleteItem }: itemProps) => {
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
    <li className={styles.container}>
      <div
        ref={ref}
        style={{ opacity: isDragging ? 0.5 : 1 }}
        className={styles.container}
      >
        {" "}
        <iframe
          width="300"
          height="200"
          src={item.url}
          title="YouTube video player"
        ></iframe>
        <div className={styles.description}>
          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.memo}> {item.text}</p>
        </div>
        <button className={styles.deletebutton} onClick={onClick}>
          <i className="fas fa-times"></i>
        </button>{" "}
      </div>
    </li>
  );
};

export default VideoItem;
