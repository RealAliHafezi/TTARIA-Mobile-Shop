import React from "react";
// style & icon
import "./../../../styles/scss/product/ProductPanel/ProductPanelOptions.scss";
import {
  AiOutlineClose,
  MdOutlineArrowLeft,
} from "./../../../assets/icons/icons";
// type
import { ProductsType } from "../../../assets/Types";
interface propsType {
  product: ProductsType;
}
const ProductPanelOptions = ({ product }: propsType) => {
  return (
    <>
      <div className="Product_Panel_Options_TitleBox d-flex align-items-center mb-3">
        <MdOutlineArrowLeft className="fs-3 text-primary d-block mb-2" />
        <h3 className="fw-bold d-block">مشخصات کلی</h3>
      </div>
      {product.information.date && (
        <>
          <div className="Product_Panel_Options_Name col-12 col-md-3 mb-0 mb-md-3 ps-md-2">
            <span className="py-2 px-3 p-md-3">تاریخ معرفی</span>
          </div>
          <div className="Product_Panel_Options_Answer col-12 col-md-9 mb-3 pe-md-2">
            <span className="p-3">{product.information.date}</span>
          </div>
        </>
      )}
      {product.information.memory && (
        <>
          <div className="Product_Panel_Options_Name col-12 col-md-3 mb-0 mb-md-3 ps-md-2">
            <span className="py-2 px-3 p-md-3">حافظه داخلی و رم</span>
          </div>
          <div className="Product_Panel_Options_Answer col-12 col-md-9 mb-3 pe-md-2">
            <span className="p-3">{product.information.memory}</span>
          </div>
        </>
      )}
      {product.information.memoryType && (
        <>
          <div className="Product_Panel_Options_Name col-12 col-md-3 mb-0 mb-md-3 ps-md-2">
            <span className="py-2 px-3 p-md-3">نوع حافظه</span>
          </div>
          <div className="Product_Panel_Options_Answer col-12 col-md-9 mb-3 pe-md-2">
            <span className="p-3">{product.information.memoryType}</span>
          </div>
        </>
      )}
      {product.information.sim && (
        <>
          <div className="Product_Panel_Options_Name col-12 col-md-3 mb-0 mb-md-3 ps-md-2">
            <span className="py-2 px-3 p-md-3">سیم کارت</span>
          </div>
          <div className="Product_Panel_Options_Answer col-12 col-md-9 mb-3 pe-md-2">
            <span className="p-3">{product.information.sim}</span>
          </div>
        </>
      )}
      {product.information.weight && (
        <>
          <div className="Product_Panel_Options_Name col-12 col-md-3 mb-0 mb-md-3 ps-md-2">
            <span className="py-2 px-3 p-md-3">وزن</span>
          </div>
          <div className="Product_Panel_Options_Answer col-12 col-md-9 mb-3 pe-md-2">
            <span className="p-3">{product.information.weight} گرم</span>
          </div>
        </>
      )}
      {product.information.height > 0 &&
        product.information.length > 0 &&
        product.information.width > 0 && (
          <>
            <div className="Product_Panel_Options_Name col-12 col-md-3 mb-0 mb-md-3 ps-md-2">
              <span className="py-2 px-3 p-md-3">ابعاد</span>
            </div>
            <div className="Product_Panel_Options_Answer col-12 col-md-9 mb-3 pe-md-2">
              <span className="p-3">
                {product.information.height > 0} <AiOutlineClose />{" "}
                {product.information.length > 0} <AiOutlineClose />{" "}
                {product.information.width > 0} میلی متر
              </span>
            </div>
          </>
        )}
      {product.information.colors && (
        <>
          <div className="Product_Panel_Options_Name col-12 col-md-3 mb-0 mb-md-3 ps-md-2">
            <span className="py-2 px-3 p-md-3">رنگ ها</span>
          </div>
          <div className="Product_Panel_Options_Answer col-12 col-md-9 mb-3 pe-md-2">
            <span className="p-3">
              {product.information.colors.join(" - ")}
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default ProductPanelOptions;
