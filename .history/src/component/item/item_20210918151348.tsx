import React from "react";
import ImageItem from "../image_item/image_item";
import NoteItem from "../note_item/note_item";
import TodoItem from "../todo_item/todo_itme";
import VideoItem from "../video_item/video_item";
import styles from "./item.module.css";

export type ItemType = {
  id: string | number;
  type: string;
  title: string;
  text: string;
  url: string;
};

export const ItemTypes = {
  ITEM: "item",
};

export type itemProps = {
  item: ItemType;
  onDeleteItem: (item: ItemType) => void;
  moveItem: (dragId: number | string, hoverId: number | string) => void;
};

export type itemsProps = {
  items: {
    [key: string | number]: ItemType;
  };
  onDeleteItem: (item: ItemType) => void;
  moveItem: (dragId: number | string, hoverId: number | string) => void;
};

const Item = ({ items, onDeleteItem, moveItem }: itemsProps) => {
  return (
    <ul className={styles.container}>
      {Object.keys(items).map((key: string): any => {
        const item = items[key];
        switch (item.type) {
          case "image":
            return (
              <ImageItem
                key={item.id}
                item={item}
                onDeleteItem={onDeleteItem}
                moveItem={moveItem}
              />
            );
          case "video":
            return (
              <VideoItem
                key={item.id}
                item={item}
                onDeleteItem={onDeleteItem}
              />
            );
          case "note":
            return (
              <NoteItem key={item.id} item={item} onDeleteItem={onDeleteItem} />
            );
          case "todo":
            return (
              <TodoItem key={item.id} item={item} onDeleteItem={onDeleteItem} />
            );
          default:
            throw new Error(`unknown type ${item.type} `);
        }
      })}
    </ul>
  );
};

export default Item;
