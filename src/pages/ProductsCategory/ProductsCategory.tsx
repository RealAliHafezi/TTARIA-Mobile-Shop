import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
// icons
import { GiSettingsKnobs } from "./../../assets/icons/icons";
// type
import { ProductsType } from "../../assets/Types";
// components
import ProductsCategoryAside from "../../components/productsCategory/productsCategoryAside/ProductsCategoryAside";
import ProductsCategorySection from "../../components/productsCategory/productsCategorySection/ProductsCategorySection";
import ProductNotFound from "../../components/productNotFound/productNotFound";
import ProductsCategoryAsideResponsive from "../../components/productsCategory/productsCategoryAsideResponsive/productsCategoryAsideResponsive";

const ProductsCategory = () => {
  // products
  let { ProductsCategory } = useParams();
  const [AllProducts, setAllProducts] = useState<null | Array<ProductsType>>(
    null
  );
  const [productsCategory, setProductsCategory] =
    useState<null | Array<ProductsType>>(null);
  const [ResponsiveAside, setResponsiveAside] = useState<boolean>(false);
  // title
  AllProducts && AllProducts.length > 0
    ? (window.document.title = `فروشگاه آریا | محصولات دسته بندی ${AllProducts[0].brandFa}`)
    : (window.document.title = "فروشگاه آریا | دسته بندی یافت نشد");
  //   data
  const getProducts = useAppSelector((state) => state.Products.products);
  // onClick on Filter Button in Aside Page
  const handleFilterProducts = (inventory?: boolean, discount?: boolean) => {
    // inventory
    inventory &&
      getProducts &&
      AllProducts &&
      setProductsCategory(
        AllProducts.filter((product) => product.information.Inventory)
      );
    // discount
    discount &&
      getProducts &&
      AllProducts &&
      setProductsCategory(
        AllProducts.filter((product) => product.information.discount)
      );
    // all filters
    discount &&
      inventory &&
      getProducts &&
      AllProducts &&
      setProductsCategory(
        AllProducts.filter(
          (product) =>
            product.information.discount && product.information.Inventory
        )
      );
    // zero filter
    !discount &&
      !inventory &&
      getProducts &&
      AllProducts &&
      setProductsCategory(
        getProducts.filter(
          (product) => String(product.brand) === String(ProductsCategory)
        )
      );
  };
  useEffect(() => {
    getProducts.length > 0 &&
      ProductsCategory &&
      setAllProducts(
        getProducts.filter(
          (product) => String(product.brand) === String(ProductsCategory)
        )
      );
    getProducts.length > 0 &&
      ProductsCategory &&
      setProductsCategory(
        getProducts.filter(
          (product) => String(product.brand) === String(ProductsCategory)
        )
      );
  }, [getProducts, ProductsCategory]);
  return (
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
        {productsCategory && productsCategory.length > 0 ? (
          <>
            <h6 className="mb-3">
              فروشگاه آریا / محصولات دسته بندی{" "}
              {productsCategory && productsCategory[0].productNameFa}{" "}
              {productsCategory && productsCategory[0].brandFa}
            </h6>
            <ProductsCategorySection products={productsCategory} />
          </>
        ) : (
          <ProductNotFound />
        )}
      </article>
    </main>
  );
};

export default ProductsCategory;
