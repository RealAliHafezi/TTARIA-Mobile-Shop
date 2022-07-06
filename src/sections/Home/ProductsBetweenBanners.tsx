import React from "react";
// data ( images )
import { ProductsBannersBetweenImages } from "./../../Data";
// style
import "./../../styles/scss/home/ProductsBetweenBanners/ProductsBetweenBanners.scss";
// type
interface PropsType {
  numOne: number;
  numTwo: number;
}

const ProductsBetweenBanners = ({ numOne, numTwo }: PropsType) => {
  return (
    <section className="ProductsBetweenBanners d-grid mt-3">
      {ProductsBannersBetweenImages.slice(numOne, numTwo).map((img, index) => (
        <img src={img} key={index} className="w-100 mb-2 mb-md-0" />
      ))}
    </section>
  );
};

export default ProductsBetweenBanners;
