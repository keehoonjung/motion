import React, { memo } from "react";
import ImageItem from "../image_item/image_item";
import { ItemState } from "../main/main";
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
  index: number;
};

export type itemsProps = {
  items: { [itemId: string | number]: ItemType };
  onDeleteItem: (item: ItemType) => void;
  moveItem: (dragIndex: number, hoberIndex: number) => void;
  updateOrder: () => void;
};

export type itemProps = {
  card: ItemType;
  index: number;
  onDeleteItem: (item: ItemType) => void;
  moveItem: (dragIndex: number, hoberIndex: number) => void;
  updateOrder: () => void;
};

const Item = memo(
  ({ items, onDeleteItem, moveItem, updateOrder }: itemsProps) => {
    return (
      <ul className={styles.container}>
        {items &&
          items.map((item, index) => {
            switch (item.type) {
              case "image":
                return (
                  <ImageItem
                    key={item.id}
                    card={item}
                    index={index}
                    onDeleteItem={onDeleteItem}
                    moveItem={moveItem}
                    updateOrder={updateOrder}
                  />
                );
              case "video":
                return (
                  <VideoItem
                    key={item.id}
                    card={item}
                    index={index}
                    onDeleteItem={onDeleteItem}
                    moveItem={moveItem}
                    updateOrder={updateOrder}
                  />
                );
              case "note":
                return (
                  <NoteItem
                    key={item.id}
                    card={item}
                    index={index}
                    onDeleteItem={onDeleteItem}
                    moveItem={moveItem}
                    updateOrder={updateOrder}
                  />
                );
              case "todo":
                return (
                  <TodoItem
                    key={item.id}
                    card={item}
                    index={index}
                    onDeleteItem={onDeleteItem}
                    moveItem={moveItem}
                    updateOrder={updateOrder}
                  />
                );
              default:
                throw new Error(`unknown type ${item.type} `);
            }
          })}
      </ul>
    );
  }
);

export default Item;
