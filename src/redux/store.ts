import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productsSlice";
import AccessReducer from "./Access";
import PanelAddProductStateReducer from "./Panel_AddproductSlice";
import AddProductReducer from "./PanelAddProductSlice";
export const store = configureStore({
  reducer: {
    Products: ProductReducer,
    Access: AccessReducer,
    AddProductState: PanelAddProductStateReducer,
    AddProduct: AddProductReducer,
  },
});
export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
