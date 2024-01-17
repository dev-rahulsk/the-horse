import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const apiCallSlice = createSlice({
  name: "apiFetch",
  initialState: {
    productsDataArray: []
  },
  reducers: {
    productsDataReceived(state, action: PayloadAction<[]>) {
      state.productsDataArray = action.payload;
    }
  }
})

export const { productsDataReceived } = apiCallSlice.actions;

export default apiCallSlice.reducer

