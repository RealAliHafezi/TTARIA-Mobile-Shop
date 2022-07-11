import React from "react";
// icon
import { HiFilter } from "./../../../assets/icons/icons";
// style
import "./../../../styles/scss/products/ProductsAside.scss";
const ProductsAside = () => {
  return (
    <div className="Products_Aside_Box position-sticky">
      <div className="products_FilterOptionBox border w-auto py-3 px-2 mb-3">
        <h6 className="products_FilterOptionBox_title fw-bold mb-3 CDEFAULT">
          فیلتر ها
        </h6>
        <div className="form-check form-switch d-flex align-items-center p-0 m-0 mb-2">
          <input
            className="form-check-input float-none m-0 ms-2 CURSOR"
            type="checkbox"
            role="switch"
            id="products_filter_check_input_off"
          />
          <label
            className="form-check-label fw-light"
            htmlFor="flexSwitchCheckDefault"
          >
            فقط کالاهای تخفیف دار
          </label>
        </div>
        <hr className="mx-1" />
        <div className="form-check form-switch d-flex align-items-center p-0 m-0 mt-2">
          <input
            className="form-check-input float-none m-0 ms-2 CURSOR"
            type="checkbox"
            role="switch"
            id="products_filter_check_input_inventory"
          />
          <label
            className="form-check-label fw-light"
            htmlFor="flexSwitchCheckDefault"
          >
            فقط کالاهای موجود در انبار
          </label>
        </div>
      </div>
      <div className="Products_FilterBtnBox border px-3 py-4 mb-3">
        <button className="Products_FilterBtnBox_Btn border-0 bg-primary text-light w-100 py-2">
          <HiFilter className="ms-1" />
          <span>اعمال فیلتر ها</span>
        </button>
      </div>
      <div className="products_Filter_Instagram w-100">
        <a href="https://instagram.com/ttaria" className="w-100">
          <img
            className="w-100 h-100"
            src="https://ttaria.com/images/banners/instagram-invite.jpg"
            alt="Instagram ..."
          />
        </a>
      </div>
    </div>
  );
};

export default ProductsAside;
