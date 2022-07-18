import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
// type
import { ProductsType } from "../../assets/Types";

const ProductsCategory = () => {
  let { ProductsCategory } = useParams();
  // title
  const [productsCategory, setProductsCategory] =
    useState<null | Array<ProductsType>>(null);
  //   data
  const getProducts = useAppSelector((state) => state.Products.products);

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
    <div>
      {productsCategory &&
        productsCategory.map((item) => <span>{item.PhoneLable}</span>)}
    </div>
  );
};

export default ProductsCategory;
