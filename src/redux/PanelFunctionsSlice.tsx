import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SetStateAction } from "react";
//types

interface DeleteColorActionType {
  formik: any;
  color: string;
}
interface SaveColorActionType {
  formik: any;
  color: string;
  setColor: React.Dispatch<SetStateAction<string>>;
}
interface SavePictureActionType {
  formik: any;
  picture: string;
  setPicture: React.Dispatch<SetStateAction<string>>;
}
const PanelFunctionsSlice = createSlice({
  name: "Panel_All_Functions",
  initialState: {
    SavePictureError1: false,
    SavePictureError2: false,
    SaveColorError1: false,
    SaveColorError2: false,
  },
  reducers: {
    HandleSavePicture: (
      state,
      action: PayloadAction<SavePictureActionType>
    ) => {
      const { formik, picture, setPicture } = action.payload;
      const have = formik.values.information.banners.some(
        (pic: string) => picture.trim() === pic.trim()
      );
      const handleCreatePicture = () => {
        state.SavePictureError1 = false;
        state.SavePictureError2 = false;
        formik.setValues({
          ...formik.values,
          information: {
            ...formik.values.information,
            banners: [...formik.values.information.banners, picture],
          },
        });
        setPicture("");
        state.SavePictureError1 = false;
        state.SavePictureError2 = false;
      };
      // if a picture repeat , do not create that
      !have
        ? formik.values.information.banners.length <= 5
          ? picture.length > 3 && handleCreatePicture()
          : (state.SavePictureError2 = true)
        : (state.SavePictureError1 = true);
    },
    HandleResetPictures: (state, action: PayloadAction<any>) => {
      const { formik } = action.payload;
      formik.setValues({
        ...formik.values,
        information: {
          ...formik.values.information,
          banners: [],
        },
      });
    },
    HandleSaveColor: (state, action: PayloadAction<SaveColorActionType>) => {
      state.SaveColorError1 = false;
      state.SaveColorError2 = false;
      const { formik, color, setColor } = action.payload;
      const handleCreateColor = () => {
        formik.setValues({
          ...formik.values,
          information: {
            ...formik.values.information,
            colorsEn: [...formik.values.information.colorsEn, color],
          },
        });
        setColor("#ff0000");
        state.SaveColorError1 = false;
        state.SaveColorError2 = false;
      };
      const have = formik.values.information.colorsEn.some(
        (color2: string) => color === color2
      );
      !have
        ? formik.values.information.colorsEn.length <= 5
          ? handleCreateColor()
          : (state.SaveColorError2 = true)
        : (state.SaveColorError1 = true);
    },
    HandleDeleteColor: (
      state,
      action: PayloadAction<DeleteColorActionType>
    ) => {
      const { formik, color } = action.payload;
      const FilteredColors = formik.values.information.colorsEn.filter(
        (Color: string) => Color !== color
      );
      formik.setValues({
        ...formik.values,
        information: {
          ...formik.values.information,
          colorsEn: FilteredColors,
        },
      });
    },
    HandleResetColors: (state, action: PayloadAction<any>) => {
      const { formik } = action.payload;
      formik.setValues({
        ...formik.values,
        information: {
          ...formik.values.information,
          colorsEn: [],
        },
      });
    },
  },
});

export const {
  HandleSaveColor,
  HandleDeleteColor,
  HandleResetColors,
  HandleSavePicture,
  HandleResetPictures,
} = PanelFunctionsSlice.actions;
export default PanelFunctionsSlice.reducer;
