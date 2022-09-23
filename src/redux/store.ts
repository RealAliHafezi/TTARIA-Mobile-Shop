import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productsSlice";
import AccessReducer from "./Access";
import PanelAddProductStateReducer from "./Panel_AddproductSlice";
import AddProductReducer from "./PanelAddProductSlice";
import EditProductReducer from "./PanelEditProductSlice";
export const store = configureStore({
  reducer: {
    Products: ProductReducer,
    Access: AccessReducer,
    AddProductState: PanelAddProductStateReducer,
    AddProduct: AddProductReducer,
    EditProduct: EditProductReducer,
  },
});
export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
