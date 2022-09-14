import React, { useState, useRef } from "react";
import { SketchPicker } from "react-color";
import Modal from "../Modal";
// type
interface propsType {
  colors: Array<string>;
  setColors: React.Dispatch<React.SetStateAction<Array<string>>>;
}
const Panel_AddProduct_Color = ({ colors, setColors }: propsType) => {
  const [color, setColor] = useState<string>("#ff0000");
  const productColorList = useRef<HTMLDivElement>(null);
  //   create and save color box
  const handleSaveColors = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const handleCreateColor = () => {
      // creating color box
      setColors([...colors, `${color}`]);
      setColor("#ff0000");
    };
    // if a color repeat , do not create that
    const have = colors.some((color2) => color === color2);
    !have ? (
      colors.length >= 5 ? (
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
  };
  // finish
  //   deleting color box
  const handleDeleteColor = (boxColor: string) => {
    const filteredColors = colors.filter((color3) => color3 !== boxColor);
    setColors(filteredColors);
  };
  return (
    <div className="mb-3 col-6 pe-4">
      <label htmlFor="Panel_Add_colors" className="form-label">
        رنگ ها
      </label>
      <div className="d-flex">
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
                onClick={() => handleDeleteColor(color2)}
              ></div>
            ))}
          </div>
          {colors.length >= 2 ? (
            <button
              className="btn btn-sm btn-danger mt-3 me-3"
              onClick={(e) => {
                setColors([])
                e.preventDefault();
              }}
            >
              ریست
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Panel_AddProduct_Color;
