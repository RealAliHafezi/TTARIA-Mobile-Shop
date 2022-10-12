import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//
import { ProductsType } from "../assets/Types";
// type state
interface actionProps {
  data: Array<ProductsType>;
  ID: string;
}
interface reActions {
  success: boolean;
  reject: boolean;
  pending: boolean;
}
interface initialStateType {
  initialValues: ProductsType;
  reactions: reActions;
}
interface UpdaterType {
  id: string;
  values: ProductsType;
}
const initialState: initialStateType = {
  initialValues: {
    productName: "Mobile",
    productNameFa: "",
    PhoneLable: "",
    PhoneLableFa: "",
    brand: "samsung",
    brandFa: "سامسونگ",
    id: "",
    information: {
      memory: "",
      memoryType: "",
      price: undefined,
      Inventory: true,
      date: "",
      type: "",
      length: 0,
      width: 0,
      weight: 0,
      height: 0,
      sim: "",
      colors: [],
      colorsEn: [],
      discount: false,
      off: 0,
      banner: "",
      banners: [],
    },
  },
  reactions: {
    success: false,
    reject: false,
    pending: false,
  },
};
// data
export const HandlePanelUpdateProduct = createAsyncThunk(
  "PanelEditProductGet",
  async ({ id, values }: UpdaterType) => {
    let response = await axios.put(
      `http://localhost:3000/productsForMySecurityHasManyWordInThisAddress/${id}`,
      values
    );
    return response.data;
  }
);
const PanelEditProductSlice = createSlice({
  name: "Panel_EditProduct_State_Slice",
  initialState,
  reducers: {
    FilteredProduct: (
      state: initialStateType,
      action: PayloadAction<actionProps>
    ) => {
      const newInitialValues = action.payload.data.filter(
        (product) => product.id === action.payload.ID
      );
      state.initialValues = newInitialValues[0];
    },
    handleResetColorEditPage: (state) => {
      state.initialValues.information.colorsEn = [];
    },
    handleResetPictureEditPage: (state) => {
      state.initialValues.information.banners = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(HandlePanelUpdateProduct.pending, (state) => {
      state.reactions.pending = true;
      state.reactions.reject = false;
      state.reactions.success = false;
    });
    builder.addCase(
      HandlePanelUpdateProduct.fulfilled,
      (state, action: PayloadAction<ProductsType>) => {
        state.initialValues = action.payload;
        state.reactions.reject = false;
        state.reactions.pending = false;
      }
    );
    builder.addCase(HandlePanelUpdateProduct.rejected, (state) => {
      state.reactions.success = false;
      state.reactions.reject = true;
      state.reactions.pending = false;
    });
  },
});
export const {
  FilteredProduct,
  handleResetColorEditPage,
  handleResetPictureEditPage,
} = PanelEditProductSlice.actions;
export default PanelEditProductSlice.reducer;
