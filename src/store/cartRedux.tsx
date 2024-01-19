import { RootState } from '../store/store'
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartData",
  initialState: {
    cartValue: 0,
  },
  reducers: {
    increment: state => {
      state.cartValue += 1;
    },
    decrement: state => {
      state.cartValue -= 1;
    }
  }
})

export const { increment, decrement } = cartSlice.actions;
export const cartValue = (state: RootState) => state.cartData.cartValue

export default cartSlice.reducer

