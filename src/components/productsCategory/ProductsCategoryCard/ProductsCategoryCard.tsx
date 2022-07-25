import React from "react";
// style
import "./../../../styles/scss/products/ProductsCard.scss";
// type
import { ProductsType } from "../../../assets/Types";
import { Link } from "react-router-dom";
interface propsType {
  product: ProductsType;
  key: number;
}
const ProductsCard = ({ product }: propsType) => {
  return (
    <div className="Products_Card col-12 col-sm-6 col-md-4 col-lg-3 card border-0 position-relative py-3 px-2">
      <div className="card-img-top position-relative overflow-hidden w-100">
        <img
          src={product.information.banner}
          className="Home_BrandsCard_Image w-100 h-100"
          alt="..."
        />
      </div>
      <div className="Home_BrandsCard_Body card-body position-relative p-0 m-0 mt-2">
        <h5 className="card-title text-black mt-4 CURSOR">
          {product.PhoneLableFa}
        </h5>
      </div>
      {/* price box */}
      <div
        className={`card-footer Home_BrandsCard_Footer position-relative d-flex align-items-center ${
          product.information.discount
            ? "justify-content-between"
            : "justify-content-end"
        } py-2 px-1 mx-2`}
      >
        {product.information.discount && (
          <span className="Home_BrandsCard_Footer_productOff bg-danger text-light px-1 px-sm-2 py-1 CDEFAULT">
            %{product.information.off}
          </span>
        )}

        {product.information.Inventory ? (
          <span className="Home_BrandsCard_Footer_Price text-primary CDEFAULT">
            {product.information.price?.toLocaleString()} تومان
          </span>
        ) : (
          <span className="Home_BrandsCard_Footer_Price text-secondary fw-bold CDEFAULT">
            ناموجود
          </span>
        )}
        <span
          id="Home_BrandsCard_Shape"
          className="position-absolute bg-primary"
        ></span>
      </div>
      {/* price box when hover on card */}
      <div
        className={`Home_BrandsCard_PriceBox_Hover d-flex align-items-center ${
          product.information.discount
            ? "justify-content-between"
            : "justify-content-end"
        } p-0 m-0`}
      >
        {product.information.discount && (
          <span className="Home_BrandsCard_productOff bg-danger text-light px-1 px-xl-2 py-0 py-xl-1 CDEFAULT">
            %{product.information.off}
          </span>
        )}
        {product.information.Inventory ? (
          <span className="Home_BrandsCard_Price text-primary CDEFAULT">
            {product.information.price?.toLocaleString()} تومان
          </span>
        ) : (
          <span className="Home_BrandsCard_Price text-secondary fw-bold fs-6 CDEFAULT">
            ناموجود
          </span>
        )}

        <span
          id="HomeCardFooterShape"
          className="position-absolute bg-primary"
        ></span>
      </div>
      <Link to={`/products/${product.id}`} className="Home_BrandsCard_Btn btn btn-primary w-100 m-0 mb-2 LINK">
        دیدن جزئیات و خرید
      </Link>
    </div>
  );
};

export default ProductsCard;
