import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { deleteItem } from "../../store";
import { itemProps } from "../item/item";
import styles from "./video_item.module.css";

const VideoItem = memo(({ item, index, onDeleteItem, dispatch }: itemProps) => {
  const onClick = () => {
    dispatch(deleteItem({ index, item }));
  };

  const url = convertToEmbeddedURL(item.url);

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
            <iframe
              width="300"
              height="200"
              src={url}
              title="YouTube video player"
              className={styles.video}
            ></iframe>
            <div className={styles.description}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.memo}> {item.text}</p>
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

function convertToEmbeddedURL(url: string): string {
  const regExp =
    /(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-z0-9-]{11}))|(?:youtu.be\/([a-zA-z0-9-]{11})))/;
  const match = url.match(regExp);
  const videoId = match ? match[1] || match[2] : undefined;
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(VideoItem);
