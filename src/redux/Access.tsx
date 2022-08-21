import { createSlice } from "@reduxjs/toolkit";

// type state
interface initialStateType {
  AdminAccess: null | true;
}
let AdminAccessStorage = sessionStorage.getItem("admin");
const initialState: initialStateType = {
  AdminAccess: AdminAccessStorage ? JSON.parse(AdminAccessStorage) : null,
};
const AccessSlice = createSlice({
  name: "AccessSlice",
  initialState,
  reducers: {
    handleChangeAdminAccess: (state: initialStateType) => {
      sessionStorage.setItem("admin", JSON.stringify(true));
      console.log(state.AdminAccess);
    },
  },
});

export const { handleChangeAdminAccess } = AccessSlice.actions;
export default AccessSlice.reducer;
