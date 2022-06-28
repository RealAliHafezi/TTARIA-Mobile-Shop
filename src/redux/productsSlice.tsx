import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { NavbarListDataType } from "../Data";
type stateType = {
  products: Array<NavbarListDataType>;
  mobiles: Array<NavbarListDataType>;
  speakers: Array<NavbarListDataType>;
  smartwatch: Array<NavbarListDataType>;
  pending: boolean;
  reject: boolean;
  success: boolean;
};
const initialState: stateType = {
  products: [],
  mobiles: [],
  speakers: [],
  smartwatch: [],
  pending: false,
  reject: false,
  success: false,
};

export const getFetchingProductsFun = createAsyncThunk(
  "fetching-products",
  async () => {
    const api =
      "http://localhost:3000/productsForMySecurityHasManyWordInThisAddress";
    let response = await axios.get<Array<NavbarListDataType>>(api);
    return response.data;
  }
);

const ProductsSlice = createSlice({
  name: "ProductsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getFetchingProductsFun.fulfilled,
      (state: stateType, action: PayloadAction<Array<NavbarListDataType>>) => {
        state.products = action.payload;
        state.success = true;
        state.reject = false;
        state.pending = false;
      }
    );
    builder.addCase(getFetchingProductsFun.pending, (state) => {
      state.success = false;
      state.reject = false;
      state.success = true;
    });
    builder.addCase(getFetchingProductsFun.rejected, (state) => {
      state.success = false;
      state.reject = true;
      state.success = false;
    });
  },
});

export default ProductsSlice.reducer;
