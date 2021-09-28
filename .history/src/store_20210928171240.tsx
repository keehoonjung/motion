import { createSlice } from "@reduxjs/toolkit";
import { ItemType } from "./component/item/item";
import { InitData } from "./component/main/main";

type ItemAction = {
  type: string;
  payload: ItemType;
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
    addItem: (state: InitData, action: ItemAction) => {
      const items = state.items;
      const item = action.payload;
      const itemUpdated = { ...items };
    },
  },
});
