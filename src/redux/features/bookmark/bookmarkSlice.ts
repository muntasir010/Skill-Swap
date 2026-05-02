/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState: { items: [] as any[] },
  reducers: {
    toggleBookmark: (state, action: PayloadAction<any>) => {
      const isExist = state.items.find((item) => item._id === action.payload._id);
      if (isExist) {
        state.items = state.items.filter((item) => item._id !== action.payload._id);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;