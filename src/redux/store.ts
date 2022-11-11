import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productsSlice";
import AccessReducer from "./Access";
import AddProductReducer from "./PanelAddProductSlice";
import PanelFunctionsReducer from "./PanelFunctionsSlice";
import EditProductReducer from "./PanelEditProductSlice";
export const store = configureStore({
  reducer: {
    Products: ProductReducer,
    Access: AccessReducer,
    AddProduct: AddProductReducer,
    EditProduct: EditProductReducer,
    PanelFunctions: PanelFunctionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
