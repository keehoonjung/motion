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
    addItem: (state: InitData, action) => {
      const items = state.items;
      const itemUpdated = { ...items };
    },
  },
});
