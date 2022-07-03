import React, { useState } from "react";
import { Link } from "react-router-dom";
// icon
import { AiFillHeart, FaStar } from "./../../../assets/icons/icons";
// style
import "./../../../styles/scss/home/ProductsBrand/HomeBrandCard.scss";
// types
import { ProductsType } from "../../../assets/Types";
interface PropsType {
  product: ProductsType;
}

const HomeBrandsCard = ({ product }: PropsType) => {
  const [Like, setLike] = useState<boolean>(false);
  return (
    <section className="Home_BrandsCard card position-relative w-100 py-3 px-2">
      <span
        onClick={() => setLike(!Like)}
        className={`position-absolute Home_BrandsCard_Like_Btn rounded-circle d-flex align-items-center justify-content-center bg-light fs-4 CURSOR ${
          Like ? "text-danger" : "text-black"
        }`}
      >
        <AiFillHeart />
      </span>
      <div className="card-img-top position-relative overflow-hidden w-100">
        <img
          src={product.information.banner}
          className="Home_BrandsCard_Image w-100 h-100"
          alt="..."
        />
      </div>
      <div className="Home_BrandsCard_Body card-body position-relative p-0 m-0 mt-2">
        <div className="Home_BrandsCard_Stars position-absolute">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <h5 className="card-title text-black mt-4 CURSOR">
          <Link to={`/`} className="LINK">
            {product.PhoneLableFa}
          </Link>
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
      <button className="Home_BrandsCard_Btn btn btn-primary w-100 m-0 mb-2">
        دیدن جزئیات و خرید
      </button>
    </section>
  );
};

export default HomeBrandsCard;
