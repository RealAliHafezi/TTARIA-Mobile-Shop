import React, { useState } from "react";
// style
import "./../../styles/scss/panel/PanelProducts.scss";
// icon
import { MdMore } from "./../../assets/icons/icons";
// type
import { ProductsType } from "./../../assets/Types";
interface propsType {
  products: Array<ProductsType>;
}
const PanelProducts = ({ products }: propsType) => {
  const [length, setMore] = useState<number>(10);
  return (
    <section className="Panel_Products">
      <ul className="p-0 m-0 w-100 row">
        {products.slice(0, length).map((product, index) => (
          <li
            className="col-12 col-sm-6 col-md-12 row g-0 d-flex align-items-center justify-content-between bg-light py-3 py-md-2 px-1"
            key={index}
            dir="ltr"
          >
            <div className="Panel_Product_Info text-center text-md-start col-12 col-md-5 mb-2 mb-md-0">
              <h6>
                نام{" "}
                <span className="fw-bold d-block d-md-inline-block">
                  : {product.PhoneLable}
                </span>
              </h6>
              <h6>
                آیدی{" "}
                <span className="fw-bold d-block d-md-inline-block">
                  : {product.id}
                </span>
              </h6>
            </div>
            <div className="Panel_Product_Info2 col-12 col-md-2 text-center mb-2 mb-md-0">
              <h6>
                وضعیت :{" "}
                <span className="fw-bold">
                  {product.information.Inventory ? "موجود" : "ناموجود"}
                </span>
              </h6>
              <h6>
                برند : <span className="fw-bold">{product.brandFa}</span>
              </h6>
            </div>
            <div className="Panel_Product_ImgBox text-center col-12 col-md-3 mb-3 mb-md-0">
              <img
                src={product.information.banner}
                alt="PIC..."
                className="h-100"
              />
            </div>
            <div className="Panel_Product_Btns col-12 col-md-2 text-center">
              <button className="btn btn-danger mx-auto mb-0 mb-md-2 me-2 me-md-0">
                Delete
              </button>
              <button
                className="btn text-light d-inline-block d-md-block mx-auto"
                style={{ backgroundColor: "orange" }}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        className={`btn Panel_Products_ShowMoreBtn text-light mx-auto my-2 ${
          length < products.length ? "d-block" : "d-none"
        }`}
        onClick={() => setMore(products.length)}
      >
        نمایش بیشتر
        <MdMore className="me-2" />
      </button>
    </section>
  );
};

export default PanelProducts;
