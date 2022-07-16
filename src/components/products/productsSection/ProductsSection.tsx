import React from "react";
// style
import "./../../../styles/scss/products/ProductsSection.scss";
// type
import { ProductsType } from "./../../../assets/Types";
import ProductsCard from "../ProductsCard/ProductsCard";
interface propsType {
  products: Array<ProductsType> | null;
}
const ProductsSection = ({ products }: propsType) => {
  return (
    <section className="Products_Section row g-0 rounded-3 border">
      {products?.map((product, index) => (
        <ProductsCard product={product} key={index} />
      ))}
    </section>
  );
};

export default ProductsSection;
