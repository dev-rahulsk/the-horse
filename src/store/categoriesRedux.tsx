import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    category: [],
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    }
  }
})

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer

