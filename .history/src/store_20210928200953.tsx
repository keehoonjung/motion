import { configureStore, createSlice } from "@reduxjs/toolkit";
import { dataService } from "./index";
import { ItemType } from "./component/item/item";
import { InitData } from "./component/main/main";

export type dataInitalState = {
  userId: string | undefined;
  data: InitData;
};

type updateUserIdAction = {
  type: string;
  payload: string;
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
    updateUserId: (state: dataInitalState, action: updateUserIdAction) => {
      state.userId = action.payload;
    },
    addItem: (state: dataInitalState, action: addItemAction) => {
      const items = state.data.items;
      const item = action.payload;
      const column = state.data.columns["column1"];

      items[item.id] = item;
      column.itemIds.push(item.id);
      dataService.writeData(state.userId!, state.data);
    },
    deleteItem: (state: dataInitalState, action: deleteItemAction) => {
      const items = state.data.items;
      const column = state.data.columns["column1"];
      const item = action.payload.item;
      const index = action.payload.index;

      delete items[item.id];
      column.itemIds.splice(index, 1);
      dataService.writeData(state.userId!, state.data);
    },
  },
});

const dataStore = configureStore({ reducer: dataSlice.reducer });

export const { updateUserId, addItem, deleteItem } = dataSlice.actions;

export default dataStore;
