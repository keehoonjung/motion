import { createSlice } from "@reduxjs/toolkit";
import { InitData } from "./component/main/main";

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
      const itemUpdated = { state };
    },
  },
});
