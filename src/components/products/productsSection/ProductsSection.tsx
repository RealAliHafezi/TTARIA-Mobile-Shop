import React from "react";
// style
import "./../../../styles/scss/products/ProductsSection.scss";
// type
import { ProductsType } from "./../../../assets/Types";
interface propsType {
  products: Array<ProductsType> | null;
}
const ProductsSection = ({ products }: propsType) => {
  return (
    <section className="Products_Section row g-0 border p-2">
      {products?.map((product, index) => (
        <div className="col-3">{product.brandFa}</div>
      ))}
    </section>
  );
};

export default ProductsSection;
