import React from "react";
// style
import "./../../../styles/scss/product/ProductInformation/ProductInformationBox.scss";
// icons
import {
  BiCheckShield,
  FaFire,
  AiOutlineClose,
} from "../../../assets/icons/icons";
// type
import { ProductsType } from "../../../assets/Types";
interface propsType {
  product: ProductsType;
}
const ProductInformationBox = ({ product }: propsType) => {
  return (
    <>
      <div className="Product_InformationBox_Header pb-1 CDEFAULT">
        <span className="Product_InformationBox_Header_LabelFa d-block mb-2">
          {product.PhoneLableFa}
        </span>
        <span className="Product_InformationBox_Header_LabelEn fw-bold d-block">
          {product.PhoneLable}
        </span>
      </div>
      <div className="Product_InformationBox_Option my-4">
        <h6 className="Product_InformationBox_Option_Brand fw-bold CDEFAULT mb-3">
          برند :{" "}
          <span className="text-primary fw-normal CURSOR">
            {product.brandFa} | {product.brand}
          </span>
        </h6>
        <span className="Product_InformationBox_Option_WarrantyBox d-flex align-items-center CDEFAULT mb-2">
          <BiCheckShield className="d-block text-muted fs-6 mb-1 ms-1" />
          <h6 className="d-block fw-bold m-0">
            18 ماه گارانتی شرکتی + کد رجیستری
          </h6>
        </span>{" "}
        <span className="Product_InformationBox_Option_SendBox d-flex align-items-center CDEFAULT">
          <FaFire className="d-block text-danger fs-6 mb-1 ms-1" />
          <h6 className="d-block fw-bold m-0">ارسال فوری</h6>
        </span>
      </div>
      <div className="Product_InformationBox_Body">
        <h6 className="Product_InformationBox_Body_Title fw-bold mb-3">
          ویژگی های محصول
        </h6>
        <ul className="Product_InformationBox_Body_List d-flex flex-column p-0 m-0">
          {product.information.memory.length > 0 && (
            <li className="mb-2">
              <span className="fw-bold">حافظه داخلی و رم</span> :{" "}
              {product.information.memory}
            </li>
          )}
          {product.information.memoryType.length > 0 && (
            <li className="mb-2">
              <span className="fw-bold">نوع حافظه داخلی</span> :{" "}
              {product.information.memoryType}
            </li>
          )}
          {product.information.type.length > 0 && (
            <li className="mb-2">
              <span className="fw-bold">نوع</span> : {product.information.type}
            </li>
          )}
          {product.information.weight && (
            <li className="mb-2">
              <span className="fw-bold">وزن</span> :{" "}
              {product.information.weight} گرم
            </li>
          )}
          {product.information.height &&
            product.information.width &&
            product.information.typelength && (
              <li className="mb-2">
                <span className="fw-bold">سایز</span> :{" "}
                {product.information.height} <AiOutlineClose />{" "}
                {product.information.width} <AiOutlineClose />{" "}
                {product.information.typelength}
              </li>
            )}
          {product.information.sim.length > 0 && (
            <li className="mb-2">
              <span className="fw-bold">سیم کارت</span> :{" "}
              {product.information.sim}
            </li>
          )}
          {product.information.date.length > 0 && (
            <li className="mb-2">
              <span className="fw-bold">سال ساخت</span> :{" "}
              {product.information.date}
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default ProductInformationBox;
