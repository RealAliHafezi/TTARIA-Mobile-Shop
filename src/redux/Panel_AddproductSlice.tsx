import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//
import Modal from "../components/Modal";
// type state
interface initialStateType {
  colors: Array<string>;
  pictures: Array<string>;
}
const initialState: initialStateType = {
  colors: [],
  pictures: [],
};
const Panel_AddProduct_State_Slice = createSlice({
  name: "Panel_AddProduct_State_Slice",
  initialState,
  reducers: {
    handleSavePicture: (
      state: initialStateType,
      action: PayloadAction<string>
    ) => {
      const handleCreatePicture = () => {
        // creating color box
        state.pictures = [...state.pictures, action.payload];
      };
      // if a color repeat , do not create that
      const have = state.pictures.some(
        (pic) => action.payload.trim() === pic.trim()
      );
      !have ? (
        action.payload.length > 3 ? (
          handleCreatePicture()
        ) : (
          <Modal
            title="اخطار"
            bodyTxt="مطمئنی"
            id="RepeatPicture"
            btnTxt="خارح شو"
            linkAddress=""
            linkTxt=""
          />
        )
      ) : (
        <Modal
          title="اخطار"
          bodyTxt="این عکس قبلا وارد شده است"
          id="RepeatPicture"
          btnTxt="خارح شو"
          linkAddress=""
          linkTxt=""
        />
      );
    },
    handleResetPictures: (state: initialStateType) => {
      state.pictures = [];
    },
    handleSaveColor: (
      state: initialStateType,
      action: PayloadAction<string>
    ) => {
      const handleCreateColor = () => {
        // creating color box
        state.colors = [...state.colors, action.payload];
        action.payload = "";
      };
      // if a color repeat , do not create that
      const have = state.colors.some((color2) => action.payload === color2);
      !have ? (
        state.colors.length >= 5 ? (
          <Modal
            title="اخطار"
            bodyTxt="تعداد رنگ ها نباید بیشتر از 5 عذذ باشد"
            id="RepeatColor"
            btnTxt="خارح شو"
            linkAddress=""
            linkTxt=""
          />
        ) : (
          handleCreateColor()
        )
      ) : (
        <Modal
          title="اخطار"
          bodyTxt="این رنگ قبلا وارد شده است"
          id="RepeatColor"
          btnTxt="خارح شو"
          linkAddress=""
          linkTxt=""
        />
      );
    },
    handleDeleteColor: (
      state: initialStateType,
      action: PayloadAction<string>
    ) => {
      const filteredColors = state.colors.filter(
        (color) => color !== action.payload
      );
      state.colors = filteredColors;
    },
    handleResetColors: (state: initialStateType) => {
      state.colors = [];
    },
  },
});

export const {
  handleSavePicture,
  handleResetPictures,
  handleSaveColor,
  handleDeleteColor,
  handleResetColors,
} = Panel_AddProduct_State_Slice.actions;
export default Panel_AddProduct_State_Slice.reducer;
