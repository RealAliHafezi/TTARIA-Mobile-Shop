import React, { useState, useRef } from "react";
import Modal from "../Modal";
// icon
import { BiLoader } from "./../../assets/icons/icons";
// type
interface propsType {
  pictures: Array<string>;
  setPictures: React.Dispatch<React.SetStateAction<Array<string>>>;
}
const Panel_AddProduct_Picture = ({ pictures, setPictures }: propsType) => {
  const [picture, setPicture] = useState<string>("");
  const productPicturesList = useRef<HTMLDivElement>(null);

  //   create and save color box
  const handleSavePictures = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const handleCreatePicture = () => {
      // creating color box
      setPictures([...pictures, `${picture.trim()}`]);
      console.log(pictures);
    };
    // if a color repeat , do not create that
    const have = pictures.some((pic) => picture.trim() === pic.trim());
    !have ? (
      picture.length > 3 ? (
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
    setPicture("");
  };
  // finish
  const handleDeleteColor = (boxColor: string) => {
    const filteredPicture = pictures.filter((pic) => pic !== boxColor);
    setPictures(filteredPicture);
  };
  return (
    <div className="Panel_AddProduct_Picture d-flex flex-column flex-wrap">
      <div className="mb-3 col-9 pe-4" ref={productPicturesList}>
        <label htmlFor="Panel_Add_basePic" className="form-label">
          عکس اصلی
        </label>
        <div className="d-flex align-items-center justify-content-between">
          <input
            type="text"
            id="Panel_Add_basePic"
            className="form-control"
            name="banner"
            placeholder="لینک عکس مورد نظر 🖾"
            onChange={(e) => {
              e.preventDefault();
              setPicture(e.target.value);
            }}
          />
          <button
            className="btn btn-warning btn-sm"
            onClick={handleSavePictures}
          >
            ثبت عکس
          </button>
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
