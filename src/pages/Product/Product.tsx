import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
// type
import { ProductsType } from "./../../assets/Types";

const Product = () => {
  const { Product } = useParams();
  const [product, setProduct] = useState<null | ProductsType[]>(null);
  //   all products
  const getAllProducts = useAppSelector((state) => state.Products.products);
  useEffect(() => {
    Product &&
      getAllProducts &&
      setProduct(getAllProducts.filter((pro) => pro.id === Product));
  }, [Product, getAllProducts]);
  return (
    product &&
    product.length > 0 && (
      <article className="Product">
        <section className="Product_Information"></section>
        <section></section>
        <section></section>
      </article>
    )
  );
};

export default Product;
