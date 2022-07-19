import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
// type
import { ProductsType } from "../../assets/Types";
import ProductsAside from "../../components/productsCategory/productsCategoryAside/ProductsAside";
import ProductsSection from "../../components/products/productsSection/ProductsSection";

const ProductsCategory = () => {
  let { ProductsCategory } = useParams();
  const [productsCategory, setProductsCategory] =
    useState<null | Array<ProductsType>>(null);
  //   data
  const getProducts = useAppSelector((state) => state.Products.products);
  // onClick on Filter Button in Aside Page
  const handleFilterProducts = (inventory?: boolean, discount?: boolean) => {
    // inventory
    inventory &&
      getProducts &&
      setProductsCategory(
        getProducts.filter((product) => product.information.Inventory)
      );
    // discount
    discount &&
      getProducts &&
      setProductsCategory(
        getProducts.filter((product) => product.information.discount)
      );
    // all filters
    discount &&
      inventory &&
      getProducts &&
      setProductsCategory(
        getProducts.filter(
          (product) =>
            product.information.discount && product.information.Inventory
        )
      );
    // zero filter
    !discount && !inventory && getProducts && setProductsCategory(getProducts);
  };
  console.log(productsCategory);
  useEffect(() => {
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
        <ProductsAside handleFilter={handleFilterProducts} />
      </aside>
      <article className="col-12 col-md-8 col-lg-9 position-relative px-3 py-4">
        <h6 className="mb-3">
          {productsCategory &&
            `فروشگاه آریا / محصولات دسته بندی ${productsCategory[0].productName} ${productsCategory[0].brandFa}`}
        </h6>
        <ProductsSection products={productsCategory} />
      </article>
    </main>
  );
};

export default ProductsCategory;
