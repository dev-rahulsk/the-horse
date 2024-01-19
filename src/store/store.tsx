import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsDataReducer from "./productsApiRedux";
import cartDataReducer from "./cartRedux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  productsData: productsDataReducer,
  cartData: cartDataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store=configureStore({
  reducer: persistedReducer,
})

export type RootState = ReturnType<typeof store.getState>
export default store;

export let persistor = persistStore(store);