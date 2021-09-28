import React, { memo } from "react";
import { Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { dataInitalState } from "../../store";
import ImageItem from "../image_item/image_item";
import { ColumnType } from "../main/main";
import NoteItem from "../note_item/note_item";
import TodoItem from "../todo_item/todo_itme";
import VideoItem from "../video_item/video_item";
import styles from "./item.module.css";

export type ItemType = {
  id: string;
  type: string;
  title: string;
  text: string;
  url: string;
  todolist: string[];
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
  column: ColumnType;
  onAddTodoItem(item: ItemType, todo: string): void;
  onDeleteTodoItem(item: ItemType, index: number): void;
};

export type itemProps = {
  item: ItemType;
  index: number;
  dispatch: Dispatch;
};

const Item = memo(
  ({ items, column, onAddTodoItem, onDeleteTodoItem }: itemsProps) => {
    return (
      <Droppable droppableId={column.id}>
        {(provided) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={styles.container}
          >
            {items &&
              column.itemIds.map((itemId, index) => {
                const item = items[itemId];
                switch (item.type) {
                  case "image":
                    return (
                      <ImageItem key={item.id} item={item} index={index} />
                    );
                  case "video":
                    return (
                      <VideoItem key={item.id} item={item} index={index} />
                    );
                  case "note":
                    return <NoteItem key={item.id} item={item} index={index} />;
                  case "todo":
                    return (
                      <TodoItem
                        key={item.id}
                        item={item}
                        index={index}
                        onAddTodoItem={onAddTodoItem}
                        onDeleteTodoItem={onDeleteTodoItem}
                      />
                    );
                  default:
                    throw new Error(`unknown type ${item.type} `);
                }
              })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    );
  }
);

function mapStateToProps(state: dataInitalState) {
  return {
    items: state.data.items,
    column: state.data.columns["column1"],
  };
}

export default connect(mapStateToProps)(Item);
