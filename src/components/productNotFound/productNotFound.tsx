import React from "react";
import { useNavigate } from "react-router-dom";
// gif
import { productNotFoundGif } from "./../../assets/image/Images";
const ProductNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="ProductNotFound w-100 h-100 d-flex align-items-center justify-content-center flex-column text-center text-sm-auto">
      <img src={productNotFoundGif} alt="Product Not Found" />
      <h5 className="mt-3 text-muted">Product Not Found</h5>
      <h6>This page is as blank as the President's brain</h6>
      <h6>شرمنده ! حال نداشتم محصولات دیگر را هم طراحی کنم</h6>
      <div className="w-100 row g-0 d-flex justify-content-center">
        <button
          className="col-11 col-sm-5 offset-sm-1 col-lg-4 offset-lg-2 btn btn-primary py-2 px-3 mt-2"
          onClick={() => navigate("/", { replace: true })}
        >
          برگشت به خانه
        </button>
        <button
          className="col-11 col-sm-5 col-lg-4 btn btn-primary py-2 px-3 mt-2"
          onClick={() => navigate(-1)}
        >
          برگشت به صفحه قبل
        </button>
      </div>
    </div>
  );
};

export default ProductNotFound;
