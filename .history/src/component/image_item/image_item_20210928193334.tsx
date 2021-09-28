import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { deleteItem } from "../../store";
import { itemProps } from "../item/item";
import styles from "./image_item.module.css";

const ImageItem = memo(({ item, index, onDeleteItem, dispatch }: itemProps) => {
  const onClick = () => {
    dispatch(deleteItem({ index, item }));
  };

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={styles.list}
        >
          <div className={styles.container}>
            <img className={styles.img} src={item.url} alt="" />
            <section className={styles.description}>
              <h2 className={styles.title}>{item.title}</h2>
              <pre className={styles.memo}>{item.text}</pre>
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

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ImageItem);
