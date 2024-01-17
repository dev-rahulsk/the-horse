import { createSlice } from "@reduxjs/toolkit";

export const filteredDataSlice = createSlice({
  name: "filteredData",
  initialState: {
    filteredDataArray: []
  },
  reducers: {
    filteredDataReceived(state, action) {
      state.filteredDataArray = action.payload;
    }
  }
})

export const { filteredDataReceived } = filteredDataSlice.actions;

export default filteredDataSlice.reducer

