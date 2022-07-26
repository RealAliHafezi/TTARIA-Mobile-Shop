import React, { useEffect, useState } from "react";
// icon
import { BsPlusLg, AiOutlineMinus, BsInfoLg } from "./../../assets/icons/icons";
// style
import "./../../styles/scss/product/ProductInformationPriceBox.scss";
// type
import { ProductsType } from "./../../assets/Types";
interface propsType {
  product: ProductsType;
}

const ProductInformationPriceBox = ({ product }: propsType) => {
  const [ProductCount, setProductCount] = useState<number>(0);
  const [MinusDisable, setMinusDisable] = useState<boolean>(false);
  const IncreaseProductCount = () => {
    setProductCount((number) => number + 1);
  };
  const DecreaseProductCount = () => {
    setProductCount((number) => number - 1);
  };
  useEffect(() => {
    ProductCount <= 0 && setMinusDisable(true);
    ProductCount > 0 && setMinusDisable(false);
  }, [ProductCount]);
  return (
    <>
      {product.information.Inventory && (
        <div className="Product_Information_PriceBox_ColorBox">
          <h6 className="mb-3">رنگبندی</h6>
          {product.information.colors.length > 0 &&
            product.information.colors.map((color, index) => (
              <label
                className="form-check Product_Information_PriceBox_Color d-inline-flex align-items-center rounded-3 p-2 ms-2 mb-2 CURSOR"
                htmlFor={`flexRadioDefault${index}`}
              >
                <span className="Product_Information_PriceBox_ColorName">
                  {color}
                </span>
                <span
                  className="Product_Information_PriceBox_Color_Color rounded-circle me-2"
                  style={{
                    backgroundColor: `${product.information.colorsEn[index]}`,
                  }}
                ></span>
                <input
                  className="form-check-input d-block m-0 me-1"
                  type="radio"
                  name="flexRadioDefault"
                  id={`flexRadioDefault${index}`}
                  checked
                />
              </label>
            ))}
        </div>
      )}
      <div className="Product_Information_PriceBox_Count mt-3">
        <h6>تعداد : </h6>
        <div className="Product_Information_PriceBox_CountActionsBox d-inline-flex align-items-center rounded-3 py-1 px-3">
          <button
            onClick={IncreaseProductCount}
            className="text-primary border-0 fs-6 ms-4"
          >
            <BsPlusLg />
          </button>
          <h6 className="d-block m-0 CDEFAULT">{ProductCount}</h6>
          <button
            disabled={MinusDisable}
            onClick={DecreaseProductCount}
            className={`${
              MinusDisable ? "text-secondary" : "text-danger"
            } border-0 fs-5 me-4`}
          >
            <AiOutlineMinus />
          </button>
        </div>
      </div>
      <div className="Product_Information_PriceBox_PriceBox mt-4">
        {product.information.price && (
          <>
            {product.information.Inventory &&
            product.information.discount &&
            product.information.off ? (
              <>
                <div className="Product_Information_PriceBox_PriceBox_Offer d-flex justify-content-center align-items-center">
                  <span className="bg-danger py-1 px-2 text-light rounded-pill ms-2">
                    <span className="fw-bold">
                      {""} %{product.information.off}
                    </span>
                    تخفیف
                  </span>
                  <span className="Product_Information_PriceBox_PriceBox_Offer_OffPrice">
                    {product.information.price?.toLocaleString()} تومان
                  </span>
                </div>
                <h1 className="fs-2 fw-bold text-black text-start mt-2">
                  {(
                    product.information.price -
                    (product.information.price * product.information.off) / 100
                  ).toLocaleString()}{" "}
                  تومان
                </h1>
              </>
            ) : (
              <h1 className="fs-2 fw-bold text-black text-start mt-2">
                {product.information.price.toLocaleString()} {""}
                تومان
              </h1>
            )}
          </>
        )}
        {/*  */}
        {product.information.Inventory ? (
          <button className="btn btn-primary text-light px-3 py-2 mt-1">
            افزودن به سبد خرید
          </button>
        ) : (
          <button className="btn btn-secondary text-light fs-6 px-3 py-2 mt-1">
            <BsInfoLg className="fs-5" />
            <span>این کالا در انبار موجود نمیباشد</span>
          </button>
        )}
        <div className="Product_Information_PriceBox_PriceBox_Instagram w-100 mt-3">
          <img
            className="w-100 h-100"
            src="https://ttaria.com/images/banners/instagram-invite.jpg"
            alt="Instagram Pic..."
          />
        </div>
      </div>
    </>
  );
};

export default ProductInformationPriceBox;

{
  /* <>
<div className="Product_Information_PriceBox_PriceBox_Offer d-flex justify-content-center align-items-center">
  <span className="bg-danger py-1 px-2 text-light rounded-pill ms-2">
    <span className="fw-bold">
      {""} %{product.information.off}
    </span>
    تخفیف
  </span>
  <span className="Product_Information_PriceBox_PriceBox_Offer_OffPrice">
    {product.information.price?.toLocaleString()} تومان
  </span>
</div>
<h1 className="fs-2 fw-bold text-black text-start mt-2">
  {(
    product.information.price -
    (product.information.price * product.information.off) / 100
  ).toLocaleString()}{" "}
  تومان
</h1>
</> */
}
