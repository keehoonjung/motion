import React from "react";
import { ItemState } from "../../../.history/src/component/main/main_20210916171409";
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

export type DragItemType = {
  id: string | number;
};

export type itemProps = {
  card: ItemType;
  onDeleteItem: (item: ItemType) => void;
  moveItem: (dragId: number | string, hoverId: number | string) => void;
};

export type itemsProps = {
  items: ItemState;
  onDeleteItem: (item: ItemType) => void;
  moveItem: (dragId: number | string, hoverId: number | string) => void;
};

const Item = ({ items, onDeleteItem, moveItem }: itemsProps) => {
  return (
    <ul className={styles.container}>
      {items.map(item: ItemType => {
        switch (item.type) {
          case "image":
            return (
              <ImageItem
                key={item.id}
                card={item}
                onDeleteItem={onDeleteItem}
                moveItem={moveItem}
              />
            );
          case "video":
            return (
              <VideoItem
                key={item.id}
                card={item}
                onDeleteItem={onDeleteItem}
                moveItem={moveItem}
              />
            );
          case "note":
            return (
              <NoteItem
                key={item.id}
                card={item}
                onDeleteItem={onDeleteItem}
                moveItem={moveItem}
              />
            );
          case "todo":
            return (
              <TodoItem
                key={item.id}
                card={item}
                onDeleteItem={onDeleteItem}
                moveItem={moveItem}
              />
            );
          default:
            throw new Error(`unknown type ${item.type} `);
        }
      })}
    </ul>
  );
};

export default Item;
