import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ItemType } from "./component/item/item";
import { InitData } from "./component/main/main";

type dataInitalState = {
  userId: string | undefined;
  data: InitData;
};

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
    userId: undefined,
    data: {
      items: {},
      columns: {
        column1: {
          id: "column1",
          itemIds: [],
        },
      },
    },
  },
  reducers: {
    addItem: (state: dataInitalState, action: addItemAction) => {
      const items = state.data.items;
      const item = action.payload;
      const column = state.data.columns["column1"];

      items[item.id] = item;
      column.itemIds.push(item.id);
    },
    deleteItem: (state: dataInitalState, action: deleteItemAction) => {
      const items = state.data.items;
      const column = state.data.columns["column1"];
      const item = action.payload.item;
      const index = action.payload.index;

      delete items[item.id];
      column.itemIds.splice(index, 1);
    },
  },
});

const dataStore = configureStore({ reducer: dataSlice.reducer });

export const { addItem, deleteItem } = dataSlice.actions;

export default dataStore;
