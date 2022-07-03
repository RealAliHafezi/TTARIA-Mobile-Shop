import React from "react";
import { Link } from "react-router-dom";
// data
import { ProductsBannersImages } from "../../Data";
// style
import "./../../styles/scss/home/productsBanner/ProductsBanner.scss";
const ProductsBanner = () => {
  return (
    <section className="Home_ProductsBanner w-100 mt-3">
      {ProductsBannersImages.map((img, index) => (
        <Link to={`/`} className="w-100 h-100 CURSOR" key={index}>
          <img src={img} alt="Products Banner" className="w-100 h-100 CURSOR" />
        </Link>
      ))}
    </section>
  );
};

export default ProductsBanner;
