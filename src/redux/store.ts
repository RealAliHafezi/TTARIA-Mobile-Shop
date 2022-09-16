import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productsSlice";
import AccessReducer from "./Access";
import PanelAddProductStateReducer from "./Panel_AddproductSlice";
export const store = configureStore({
  reducer: {
    Products: ProductReducer,
    Access: AccessReducer,
    AddProductState: PanelAddProductStateReducer,
  },
});
export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
