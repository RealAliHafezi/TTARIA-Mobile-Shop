import React, { useState, useEffect } from "react";
import { ProductsType } from "../../assets/Types";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
// icon
import { GiSettingsKnobs } from "./../../assets/icons/icons";
// components
import ProductsCategoryAside from "../../components/productsCategory/productsCategoryAside/ProductsCategoryAside";
import ProductsCategorySection from "../../components/productsCategory/productsCategorySection/ProductsCategorySection";
import ProductNotFound from "../../components/productNotFound/productNotFound";
import ProductsCategoryAsideResponsive from "../../components/productsCategory/productsCategoryAsideResponsive/productsCategoryAsideResponsive";
import PagesLayout from "../../sections/PagesLayout/PageLayout";
const Search = () => {
  const { SearchTxt } = useParams();
  const Products = useAppSelector((state) => state.Products.products);
  const [ResponsiveAside, setResponsiveAside] = useState<boolean>(false);
  const [products, setProducts] = useState<Array<ProductsType>>([]);
  const GetSearchingResult = () => {
    SearchTxt &&
      setProducts(
        Products.filter((product: ProductsType) =>
          product.PhoneLable.toLocaleLowerCase().includes(
            SearchTxt.toLocaleLowerCase()
          )
        )
      );
  };
  const handleFilterProducts = (inventory?: boolean, discount?: boolean) => {
    // inventory
    inventory &&
      products &&
      Products &&
      setProducts(Products.filter((product) => product.information.Inventory));
    // discount
    discount &&
      Products &&
      products &&
      setProducts(products.filter((product) => product.information.discount));
    // all filters
    discount &&
      inventory &&
      Products &&
      products &&
      setProducts(
        products.filter(
          (product) =>
            product.information.discount && product.information.Inventory
        )
      );
    // zero filter
    !discount &&
      !inventory &&
      Products &&
      products &&
      setProducts(
        Products.filter((product) => String(product.brand) === String(products))
      );
  };
  useEffect(() => {
    SearchTxt && SearchTxt.length && Products.length && GetSearchingResult();
  }, [SearchTxt, Products]);
  return (
    <PagesLayout>
      <main id="Products" className="row gx-0 h-100">
        <aside className="col-0 col-md-4 col-lg-3 d-none d-md-block position-relative px-3 py-2">
          <ProductsCategoryAside handleFilter={handleFilterProducts} />
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
          {products.length > 0 ? (
            <>
              <h6 className="mb-3">
                فروشگاه آریا / محصولات دسته بندی{" "}
                {products.length && products[0].productNameFa}{" "}
                {products.length && products[0].brandFa}
              </h6>
              <ProductsCategorySection products={products} />
            </>
          ) : (
            <ProductNotFound />
          )}
        </article>
      </main>
    </PagesLayout>
  );
};

export default Search;
