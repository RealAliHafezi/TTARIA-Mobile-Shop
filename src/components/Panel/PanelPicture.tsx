import React, { useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  HandleResetPictures,
  HandleSavePicture,
} from "../../redux/PanelFunctionsSlice";
// components
import Alert from "../Alert";
import PicModal from "../PicModal";
const PanelPicture = ({ formik }: any) => {
  const dispatch = useAppDispatch();
  const [picture, setPicture] = useState<string>("");
  // for show picture in screen
  const productPicturesList = useRef<HTMLDivElement>(null);
  // errors
  const errors = useAppSelector((state) => state.PanelFunctions);
  return (
    <div className="Panel_AddProduct_Picture d-flex flex-column flex-wrap position-relative">
      <div className="col-12 col-md-9 mb-3" ref={productPicturesList}>
        <label htmlFor="Panel_Add_basePic" className="form-label">
          عکس اصلی
        </label>
        <div className="d-flex align-items-center justify-content-between">
          <input
            type="text"
            id="Panel_Add_basePic"
            className={`form-control d-block w-75 ${
              formik.touched.PhoneLable &&
              formik.touched.PhoneLable &&
              "ErrorInput"
            }`}
            name="banner"
            placeholder="لینک عکس مورد نظر 🖾"
            value={picture}
            onChange={(e) => {
              e.preventDefault();
              setPicture(e.target.value);
            }}
          />
          <button
            className="btn btn-warning btn-sm"
            onClick={(e) => {
              e.preventDefault();
              dispatch(
                HandleSavePicture({
                  formik: formik,
                  picture: picture,
                  setPicture: setPicture,
                })
              );
            }}
          >
            ثبت عکس
          </button>
          {formik.values.information.banners.length >= 2 && (
            <button
              className="btn btn-danger btn-sm me-2"
              onClick={(e) => {
                e.preventDefault();
                dispatch(HandleResetPictures({ formik: formik }));
              }}
            >
              ریست
            </button>
          )}
        </div>
        {formik.touched.information?.banners &&
          formik.errors.information?.banners && (
            <span
              style={{ bottom: "15px" }}
              className="text-danger position-absolute ErrorText"
            >
              {formik.errors.information?.banners}
            </span>
          )}
      </div>
      <div className="d-flex flex-wrap mb-3 mt-2 me-3">
        {formik.values.information.banners.length ? (
          formik.values.information.banners.map(
            (pic: string, index: number) => (
              <React.Fragment key={index}>
                <img
                  src={pic.trim()}
                  alt="Does not exist"
                  className="me-2 CURSOR"
                  style={{ width: "75px", height: "75px" }}
                  data-bs-toggle="modal"
                  data-bs-target={`#PicModal_${index}`}
                />
                <PicModal formik={formik} URL={pic.trim()} index={index} />
              </React.Fragment>
            )
          )
        ) : (
          <h6>عکسی انتخاب نکردید</h6>
        )}
      </div>
      {errors.SavePictureError2 && (
        <Alert
          bottom="-10px"
          right="20px"
          massage="ذخیره عکس به دلیل تعداد بالا ناموفق بود"
          bg="danger"
          time={2000}
          title="پیام جدید"
        />
      )}
      {errors.SavePictureError1 && (
        <Alert
          bottom="-10px"
          right="20px"
          massage="ذخیره عکس به دلیل تکراری بودن ناموفق بود"
          bg="danger"
          time={2000}
          title="پیام جدید"
        />
      )}
    </div>
  );
};
export default PanelPicture;
