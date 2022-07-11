import React from "react";
// style
import "./../../styles/scss/products/Products.scss";
// components
import ProductsAside from "../../components/products/productsAside/ProductsAside";
import ProductsSection from "../../components/products/productsSection/ProductsSection";

const Products = () => {
  // title
  window.document.title = "همه محصولات | فروشگاه آریا";
  return (
    <main id="Products" className="row gx-0 h-100">
      <aside className="col-0 col-md-4 col-lg-3 d-none d-md-block position-relative px-3 py-2">
        <ProductsAside />
      </aside>
      <article className="col-12 col-md-8 col-lg-9 p-3">
        <h6>فروشگاه آریا / همه محصولات</h6>
        <ProductsSection />
      </article>
    </main>
  );
};

export default Products;
