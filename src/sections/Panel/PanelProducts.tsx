import React, { useState } from "react";
import { Link } from "react-router-dom";
// style
import "./../../styles/scss/Panel/PanelProducts.scss";
// icon
import { MdMore, RiDeleteBin5Fill, TbEdit } from "./../../assets/icons/icons";
// type
import { ProductsType } from "./../../assets/Types";
interface propsType {
  products: Array<ProductsType>;
}
const PanelProducts = ({ products }: propsType) => {
  const [length, setMore] = useState<number>(10);
  return (
    <section className="Panel_Products col-10 text-center">
      <ul className="p-0 m-0 w-100 row">
        {products.slice(0, length).map((product, index) => (
          <li
            className="col-12 col-sm-6 col-md-12 bg-dark row g-0 d-flex align-items-center justify-content-between bg-light py-3 py-md-2 px-1 pe-md-1 ps-md-2 border-bottom border-danger"
            key={index}
            dir="ltr"
          >
            <div className="Panel_Product_Info text-center text-md-start col-12 col-md-6 mb-2 mb-md-0">
              <h6>
                نام{" "}
                <span className="d-block d-md-inline-block mt-1 mt-md-0">
                  : {product.PhoneLable}
                </span>
              </h6>
              <h6>
                آیدی{" "}
                <span className="d-block d-md-inline-block mt-1 mt-md-0">
                  : {product.id}
                </span>
              </h6>
            </div>
            <div className="Panel_Product_Info2 col-12 col-md-2 text-center mb-2 mb-md-0">
              <h6>
                <span>وضعیت</span>
                <span className="d-block">
                  {product.information.Inventory ? "موجود" : "ناموجود"}
                </span>
              </h6>
              <h6>
                <span className="mt-2">برند</span>
                <span className="d-block">{product.brandFa}</span>
              </h6>
            </div>
            <div className="Panel_Product_ImgBox text-center col-12 col-md-2 mb-3 mb-md-0">
              <img
                src={product.information.banner}
                alt="PIC..."
                className="h-100"
              />
            </div>
            <div className="Panel_Product_Btns col-12 col-md-1 text-center">
              <button className="btn btn-danger d-inline-flex align-items-center justify-content-center rounded-circle mx-auto mb-0 mb-md-2 me-2 me-md-0">
                <RiDeleteBin5Fill className="fs-4" />
              </button>
              <button
                className="btn rounded-circle text-light d-inline-flex align-items-center justify-content-center d-md-flex mx-auto"
                style={{ backgroundColor: "orange" }}
              >
                <Link to={`/panel/editProduct/${product.id}`} className="LINK">
                  <TbEdit className="fs-4" />
                </Link>
              </button>
            </div>
          </li>
        ))}
      </ul>
      {length < products.length && (
        <button
          className={`btn Panel_Products_ShowMoreBtn text-light my-2`}
          onClick={() => setMore(products.length)}
        >
          نمایش بیشتر
          <MdMore className="me-2" />
        </button>
      )}
    </section>
  );
};

export default PanelProducts;
