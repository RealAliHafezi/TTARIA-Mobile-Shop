import React, { useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  handleSavePicture,
  handleResetPictures,
} from "../../redux/Panel_AddproductSlice";
const Panel_AddProduct_Picture = () => {
  const [picture, setPicture] = useState<string>("");
  const productPicturesList = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  // give from redux toolkit
  const pictures = useAppSelector((state) => state.AddProductState.pictures);
  //   create and save color box
  const handleSavePictures = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(handleSavePicture(picture));
    setPicture("");
  };
  return (
    <div className="Panel_AddProduct_Picture d-flex flex-column flex-wrap">
      <div className="mb-3 col-12 col-md-9 pe-md-4" ref={productPicturesList}>
        <label htmlFor="Panel_Add_basePic" className="form-label">
          عکس اصلی
        </label>
        <div className="d-flex align-items-center justify-content-between">
          <input
            type="text"
            id="Panel_Add_basePic"
            className="form-control d-block w-75"
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
              handleSavePictures(e);
            }}
          >
            ثبت عکس
          </button>
          {pictures.length >= 2 && (
            <button
              className="btn btn-danger btn-sm me-2"
              onClick={(e) => {
                e.preventDefault();
                dispatch(handleResetPictures());
              }}
            >
              ریست
            </button>
          )}
        </div>
      </div>
      <div className="d-flex flex-wrap mb-3 mt-2 me-3">
        {pictures.map((pic, index) => (
          <img
            key={index}
            src={pic.trim()}
            alt="Does not exist"
            className="me-2"
            style={{ width: "75px", height: "75px" }}
          />
        ))}
      </div>
    </div>
  );
};
export default Panel_AddProduct_Picture;
