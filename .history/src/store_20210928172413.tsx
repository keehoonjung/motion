import { createSlice } from "@reduxjs/toolkit";
import { ItemType } from "./component/item/item";
import { InitData } from "./component/main/main";

type addItemAction = {
  type: string;
  payload: ItemType;
};

type deleteItemAction = {
  type: string;
  payload: { index: number; item: ItemType };
};

const dataSlice = createSlice({
  name: "Data",
  initialState: {
    items: {},
    columns: {
      column1: {
        id: "column1",
        itemIds: [],
      },
    },
  },
  reducers: {
    addItem: (state: InitData, action: addItemAction) => {
      const items = state.items;
      const item = action.payload;
      const column = state.columns["column1"];

      items[item.id] = item;
      column.itemIds.push(item.id);
    },
    deleteItem: (state: InitData, action: deleteItemAction) => {},
  },
});
