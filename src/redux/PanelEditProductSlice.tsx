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
export const PanelEditProductGet = createAsyncThunk(
  "PanelEditProductGet",
  async (id: string) => {
    let response = await axios.get(
      `http://localhost:3000/productsForMySecurityHasManyWordInThisAddress/${id}`
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
  },
  extraReducers(builder) {
    builder.addCase(PanelEditProductGet.pending, (state) => {
      state.reactions.pending = true;
      state.reactions.reject = false;
      state.reactions.success = false;
    });
    builder.addCase(
      PanelEditProductGet.fulfilled,
      (state, action: PayloadAction<ProductsType>) => {
        state.initialValues = action.payload;
        state.reactions.reject = false;
        state.reactions.pending = false;
      }
    );
    builder.addCase(PanelEditProductGet.rejected, (state) => {
      state.reactions.success = false;
      state.reactions.reject = true;
      state.reactions.pending = false;
    });
  },
});
export const { FilteredProduct } = PanelEditProductSlice.actions;
export default PanelEditProductSlice.reducer;
