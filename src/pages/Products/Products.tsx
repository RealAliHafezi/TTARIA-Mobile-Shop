import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
// style
import "./../../styles/scss/products/Products.scss";
// components
import ProductsAside from "../../components/products/productsAside/ProductsAside";
import ProductsSection from "../../components/products/productsSection/ProductsSection";
// types
import { ProductsType } from "./../../assets/Types";
const Products = () => {
  const [AllProducts, setAllProducts] = useState<null | Array<ProductsType>>(
    null
  );
  // title
  window.document.title = "همه محصولات | فروشگاه آریا";
  //
  const getProducts = useAppSelector((state) => state.Products.products);
  useEffect(() => {
    getProducts.length > 1 && setAllProducts(getProducts);
  }, [getProducts]);
  return (
    <main id="Products" className="row gx-0 h-100">
      <aside className="col-0 col-md-4 col-lg-3 d-none d-md-block position-relative px-3 py-2">
        <ProductsAside />
      </aside>
      <article className="col-12 col-md-8 col-lg-9 px-3 py-4">
        <h6 className="mb-3">فروشگاه آریا / همه محصولات</h6>
        <ProductsSection products={AllProducts} />
      </article>
    </main>
  );
};

export default Products;
