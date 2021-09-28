import { configureStore, createSlice } from "@reduxjs/toolkit";
import { dataService } from "./index";
import { ItemType } from "./component/item/item";
import { InitData } from "./component/main/main";
import { async } from "@firebase/util";

export type dataInitalState = {
  userId: string | undefined;
  data: InitData;
};

type readDataAction = {
  type: string;
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

type updateDataAction = {
  type: string;
  payload: (string | number)[];
};

type addTodoAction = {
  item: string;
  payload: {item:ItemType, todo:string}
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
    readData: (state: dataInitalState, action: readDataAction) => {
      dataService.readData(state.userId!, (severData: InitData) => {
        state.data = severData;
      });
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
      dataService.deleteData(state.userId!, item.id);
      dataService.updateColumn(state.userId!, column.itemIds);
    },
    updateData: (state: dataInitalState, action: updateDataAction) => {
      const column = state.data.columns["column1"];
      column.itemIds = action.payload;
      dataService.updateColumn(state.userId!, column.itemIds);
    },
    addTodo:(state: dataInitalState, action:addTodoAction){
      
    }
  },
});

const dataStore = configureStore({ reducer: dataSlice.reducer });

export const { updateUserId, readData, addItem, deleteItem, updateData } =
  dataSlice.actions;

export default dataStore;
