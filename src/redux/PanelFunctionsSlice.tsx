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
  initialState: {},
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
        formik.setValues({
          ...formik.values,
          information: {
            ...formik.values.information,
            banners: [...formik.values.information.banners, picture],
          },
        });
        setPicture("");
      };
      // if a picture repeat , do not create that
      have
        ? formik.values.information.banners >= 5
          ? console.log("error")
          : handleCreatePicture()
        : console.log("error1");
    },
    HandleResetPictures: (state, action: PayloadAction<any>) => {
      action.payload.setValue({
        ...action.payload.values,
        information: {
          ...action.payload.values.information,
          banners: [],
        },
      });
    },
    HandleSaveColor: (state, action: PayloadAction<SaveColorActionType>) => {
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
      };
      const have = formik.values.information.colorsEn.some(
        (color2: string) => color === color2
      );
      !have
        ? formik.values.information.colorsEn >= 5
          ? console.log("error")
          : handleCreateColor()
        : console.log("error1");
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
