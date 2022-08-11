import React, { SetStateAction, useEffect, useState } from "react";
// style
import { ProductsCategoryAsideResponsiveWrapper } from "../../../styles/js/productCategory.style";
import "./../../../styles/scss/productsCategory/productsCategoryAsideResponsive.scss";
// icon
import {
  AiOutlineClose,
  GiSettingsKnobs,
  HiFilter,
} from "./../../../assets/icons/icons";
// type
interface propsType {
  filterSlide: boolean;
  setFilterSlide: React.Dispatch<SetStateAction<boolean>>;
  handleFilter: (inventory?: boolean, discount?: boolean) => void;
}
export interface productsCategoryWrapperProps {
  filterSlide: boolean;
}

const ProductsCategoryAsideResponsive = ({
  filterSlide,
  setFilterSlide,
  handleFilter,
}: propsType) => {
  const ProductsCategoryWrapper: productsCategoryWrapperProps = {
    filterSlide: filterSlide,
  };
  const [InventoryFilter, setInventoryFilter] = useState<boolean>(false);
  const [DiscountFilter, setDiscountFilter] = useState<boolean>(false);

  useEffect(() => {
    setInventoryFilter(false);
    setDiscountFilter(false);
  }, [window.document.baseURI]);
  return (
    <ProductsCategoryAsideResponsiveWrapper
      className="productsCategory_AsideResponsive position-fixed bg-light w-100 h-100 px-3"
      id="navbarSupportedContent"
      {...ProductsCategoryWrapper}
    >
      <button
        className="productsCategory_AsideResponsive_CloseBtn position-absolute text-black p-0 m-0"
        onClick={() => setFilterSlide(false)}
      >
        <AiOutlineClose />
      </button>
      <div className="productsCategory_AsideResponsive_title position-absolute">
        <span className="ms-2">جستجوی پیشرفته</span>
        <GiSettingsKnobs />
      </div>
      <div className="productsCategory_AsideResponsive_FilterBox border w-auto py-3 px-2 mb-3">
        <h6 className="productsCategory_AsideResponsive_FilterBox_Title fw-bold mb-3 CDEFAULT">
          فیلتر ها
        </h6>
        <div className="form-check form-switch d-flex align-items-center p-0 m-0 mb-2">
          <input
            className="form-check-input float-none m-0 ms-2 CURSOR"
            type="checkbox"
            role="switch"
            id="products_filter_check_input_off"
            onChange={(e) => {
              setDiscountFilter(e.target.checked);
            }}
            checked={DiscountFilter}
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
            onChange={(e) => {
              setInventoryFilter(e.target.checked);
            }}
            checked={InventoryFilter}
          />
          <label
            className="form-check-label fw-light"
            htmlFor="flexSwitchCheckDefault"
          >
            فقط کالاهای موجود در انبار
          </label>
        </div>
      </div>
      <div className="productsCategory_AsideResponsive_BtnBox border px-3 py-4 mb-3">
        <button
          className="productsCategory_AsideResponsive_BtnBox_Btn border-0 bg-primary text-light w-100 py-2"
          onClick={() => {
            handleFilter(InventoryFilter, DiscountFilter);
            setFilterSlide(false);
          }}
        >
          <HiFilter className="ms-1" />
          <span>اعمال فیلتر ها</span>
        </button>
      </div>
      <div className="productsCategory_AsideResponsive_Instagram w-100">
        <a href="https://instagram.com/ttaria" className="w-100">
          <img
            className="w-75 h-75 d-block mx-auto"
            src="https://ttaria.com/images/banners/instagram-invite.jpg"
            alt="Instagram ..."
          />
        </a>
      </div>
    </ProductsCategoryAsideResponsiveWrapper>
  );
};

export default ProductsCategoryAsideResponsive;
