import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//
import { ProductsType } from "../assets/Types";
// type state
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
export const PanelAddProductPost = createAsyncThunk(
  "PanelAddProductPost",
  async (values: ProductsType) => {
    let api =
      "http://localhost:3000/productsForMySecurityHasManyWordInThisAddress";
    let response = await axios.post(api, values);
    return response.data;
  }
);
const PanelAddProductSlice = createSlice({
  name: "Panel_AddProduct_State_Slice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(PanelAddProductPost.pending, (state) => {
      state.reactions.pending = true;
      state.reactions.reject = false;
      state.reactions.success = false;
    });
    builder.addCase(PanelAddProductPost.fulfilled, (state) => {
      state.reactions.success = true;
      state.reactions.reject = false;
      state.reactions.pending = false;
    });
    builder.addCase(PanelAddProductPost.rejected, (state) => {
      state.reactions.success = false;
      state.reactions.reject = true;
      state.reactions.pending = false;
    });
  },
});

export default PanelAddProductSlice.reducer;
