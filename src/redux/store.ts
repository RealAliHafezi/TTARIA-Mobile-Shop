import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productsSlice";
export const store = configureStore({
  reducer: {
    Products: ProductReducer,
  },
});
export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
