import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
// style
import "./../../styles/scss/products/Products.scss";
// components
import ProductsAside from "../../components/products/productsAside/ProductsAside";
import ProductsSection from "../../components/products/productsSection/ProductsSection";
import PagesLayout from "../../sections/PagesLayout/PageLayout";
// types
import { ProductsType } from "./../../assets/Types";
import ProductsCategoryAsideResponsive from "./../../components/productsCategory/productsCategoryAsideResponsive/productsCategoryAsideResponsive";
// icon
import { GiSettingsKnobs } from "./../../assets/icons/icons";
const Products = () => {
  const [AllProducts, setAllProducts] = useState<null | Array<ProductsType>>(
    null
  );
  const [ResponsiveAside, setResponsiveAside] = useState<boolean>(false);
  // title
  window.document.title = "همه محصولات | فروشگاه آریا";
  //
  const getProducts = useAppSelector((state) => state.Products.products);
  // onclick event on ProductsAside Page
  const handleFilterProducts = (inventory?: boolean, discount?: boolean) => {
    // inventory
    inventory &&
      getProducts &&
      setAllProducts(
        getProducts.filter((product) => product.information.Inventory)
      );
    // discount
    discount &&
      getProducts &&
      setAllProducts(
        getProducts.filter((product) => product.information.discount)
      );
    // all filters
    discount &&
      inventory &&
      getProducts &&
      setAllProducts(
        getProducts.filter(
          (product) =>
            product.information.discount && product.information.Inventory
        )
      );
    // zero filter
    !discount && !inventory && getProducts && setAllProducts(getProducts);
  };
  useEffect(() => {
    getProducts.length > 1 && setAllProducts(getProducts);
  }, [getProducts]);
  return (
    <PagesLayout>
      <main id="Products" className="row gx-0 h-100">
        <aside className="col-0 col-md-4 col-lg-3 d-none d-md-block position-relative px-3 py-2">
          <ProductsAside handleFilter={handleFilterProducts} />
        </aside>
        {/* Responsive */}
        <button
          className="d-flex d-md-none btn btn-primary w-auto align-items-center me-3"
          onClick={() => setResponsiveAside(true)}
        >
          <span className="ms-1">جستجوی پیشرفته</span>
          <GiSettingsKnobs />
        </button>
        <ProductsCategoryAsideResponsive
          filterSlide={ResponsiveAside}
          setFilterSlide={setResponsiveAside}
          handleFilter={handleFilterProducts}
        />
        <article className="col-12 col-md-8 col-lg-9 position-relative px-3 py-4">
          <h6 className="mb-3">فروشگاه آریا / همه محصولات</h6>
          <ProductsSection products={AllProducts} />
        </article>
      </main>
    </PagesLayout>
  );
};

export default Products;
