import { configureStore } from "@reduxjs/toolkit";
import apiFetchReducer from "./apiFetchRedux";
import filteredDataReducer from "./filteredDataRedux";
import categoryReducer from "./categoriesRedux";

const store=configureStore({
  reducer: {
    apiFetch: apiFetchReducer,
    filteredData: filteredDataReducer,
    categories: categoryReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store;