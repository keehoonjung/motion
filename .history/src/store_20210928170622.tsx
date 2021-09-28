import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {},
});
