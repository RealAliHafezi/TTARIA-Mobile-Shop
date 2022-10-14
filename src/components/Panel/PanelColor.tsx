import React, { useState, useRef } from "react";
import { SketchPicker } from "react-color";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  HandleDeleteColor,
  HandleResetColors,
  HandleSaveColor,
} from "../../redux/PanelFunctionsSlice";
// components
import Alert from "../Alert";
//
const PanelColor = ({ formik }: any) => {
  const dispatch = useAppDispatch();
  const [color, setColor] = useState<string>("#ff0000");
  // for show color elements
  const productColorList = useRef<HTMLDivElement>(null);
  // for errors
  const errors = useAppSelector((state) => state.PanelFunctions);
  // finish
  return (
    <div className="mb-3 col-12 col-md-6 pe-4 position-relative">
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
            onClick={(e) => {
              e.preventDefault();
              dispatch(
                HandleSaveColor({
                  formik: formik,
                  setColor: setColor,
                  color: color,
                })
              );
            }}
            type="button"
          >
            ثبت
          </button>
          <h6 className="pe-4 mt-3">رنگ های ثبت شده</h6>
          <div className="me-3 mt-3 d-flex flex-wrap" ref={productColorList}>
            {formik.values.information.colorsEn.length ? (
              formik.values.information.colorsEn.map(
                (color2: string, index: number) => (
                  <div
                    key={index}
                    className="Panel_Add_createColorCircle rounded-circle border border-warning m-2 CURSOR"
                    style={{ backgroundColor: `${color2}` }}
                    onClick={(event) => {
                      event.preventDefault();
                      dispatch(
                        HandleDeleteColor({
                          formik: formik,
                          color: color2,
                        })
                      );
                    }}
                  ></div>
                )
              )
            ) : (
              <h6>رنگی انتخاب نکردید</h6>
            )}
          </div>
          {formik.values.information.colorsEn.length >= 2 ? (
            <button
              className="btn btn-sm btn-danger mt-3 me-3"
              onClick={(e) => {
                e.preventDefault();
                dispatch(HandleResetColors({ formik: formik }));
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
      {errors.SaveColorError2 && (
        <Alert
          bottom="-10px"
          right="20px"
          massage="ذخیره رنگ به دلیل تعداد بالا ناموفق بود"
          bg="danger"
          time={2000}
          title="پیام جدید"
        />
      )}
      {errors.SaveColorError1 && (
        <Alert
          bottom="-10px"
          right="20px"
          massage="ذخیره رنگ به دلیل تکراری بودن ناموفق بود"
          bg="danger"
          time={2000}
          title="پیام جدید"
        />
      )}
    </div>
  );
};
export default PanelColor;
