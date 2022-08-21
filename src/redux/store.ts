import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productsSlice";
import AccessReducer from "./Access";
export const store = configureStore({
  reducer: {
    Products: ProductReducer,
    Access: AccessReducer,
  },
});
export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
