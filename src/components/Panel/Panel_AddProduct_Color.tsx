import React, { useState, useRef } from "react";
import { SketchPicker } from "react-color";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  handleSaveColor,
  handleDeleteColor,
  handleResetColors,
} from "../../redux/Panel_AddproductSlice";
const PanelAddProductColor = ({ formik }: any) => {
  const [color, setColor] = useState<string>("#ff0000");
  const productColorList = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const colors = useAppSelector((state) => state.AddProductState.colors);
  //   create and save color box
  const handleSaveColors = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(handleSaveColor(color));
    setColor("#ff0000");
  };
  // finish
  //   deleting color box
  return (
    <div className="mb-3 col-12 col-md-6 pe-4">
      <label htmlFor="Panel_Add_colors" className="form-label">
        رنگ ها
      </label>
      <div className="d-flex position-relative">
        <SketchPicker
          color={color}
          onChangeComplete={(color: any) => {
            setColor(color.hex);
          }}
        />
        <div>
          <div className="d-flex align-items-center me-3">
            <div
              className="rounded-circle border border-warning Panel_Add_createColorCircle"
              style={{
                backgroundColor: `${color}`,
              }}
            ></div>
            <h6 className="me-2">رنگ فعلی</h6>
          </div>
          <button
            className="btn btn-sm btn-warning me-3 mt-3"
            onClick={(e) => handleSaveColors(e)}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#RepeatColor"
          >
            ثبت
          </button>
          <h6 className="pe-4 mt-3">رنگ های ثبت شده</h6>
          <div className="me-3 mt-3 d-flex flex-wrap" ref={productColorList}>
            {colors.map((color2, index) => (
              <div
                key={index}
                className="Panel_Add_createColorCircle rounded-circle border border-warning m-2"
                style={{ backgroundColor: `${color2}` }}
                onClick={() => dispatch(handleDeleteColor(color2))}
              ></div>
            ))}
          </div>
          {colors.length >= 2 ? (
            <button
              className="btn btn-sm btn-danger mt-3 me-3"
              onClick={(e) => {
                dispatch(handleResetColors());
                e.preventDefault();
              }}
            >
              ریست
            </button>
          ) : null}
        </div>
        {formik.touched.information?.colorsEn &&
          formik.errors.information?.colorsEn && (
            <span className="text-danger position-absolute ErrorText">
              {formik.errors.information?.colorsEn}
            </span>
          )}
      </div>
    </div>
  );
};

export default PanelAddProductColor;
