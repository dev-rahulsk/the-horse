import { RootState } from './store'
import { createSlice } from "@reduxjs/toolkit";

export const apiCallSlice = createSlice({
  name: "productsData",
  initialState: {
    productsDataArray: [],
    filteredDataArray: [],
    categoryDataArray: [],
    selectedCat: "",
  },
  reducers: {
    setProductsData: (state, action) => {
      state.productsDataArray = action.payload;
      state.filteredDataArray = action.payload;
    },
    setFilteredData: (state, action) => {
      state.filteredDataArray = action.payload;
    },
    setCategory: (state, action) => {
      state.categoryDataArray = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCat = action.payload;
    },
  }
})

export const { setProductsData, setFilteredData, setCategory, setSelectedCategory } = apiCallSlice.actions;
export const productsData = (state: RootState) => state.productsData.productsDataArray;
export const filteredData = (state: RootState) => state.productsData.filteredDataArray;
export const categoryData = (state: RootState) => state.productsData.categoryDataArray;
export const selectedCat = (state: RootState) => state.productsData.selectedCat;

export default apiCallSlice.reducer

