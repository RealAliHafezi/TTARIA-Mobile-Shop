import React from "react";
// gif
import { productNotFoundGif } from "./../../assets/image/Images";
const ProductNotFound = () => {
  return (
    <div className="ProductNotFound w-100 h-100 d-flex align-items-center justify-content-center flex-column">
      <img src={productNotFoundGif} alt="Product Not Found" />
      <h5 className="mt-3 text-muted">Product Not Found</h5>
      <h6>This page is as blank as the President's brain</h6>
      <h6>شرمنده ! حال نداشتم محصولات دیگر را هم طراحی کنم</h6>
    </div>
  );
};

export default ProductNotFound;
