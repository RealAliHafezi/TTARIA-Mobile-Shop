import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
// components
import ProductInformationBox from "./../../components/Product/ProductInformationBox";
import ProductInformationPriceBox from "../../components/Product/ProductInformationPriceBox";
// style
import "./../../styles/scss/product/Product.scss";
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
      <article className="Product px-3">
        <section className="Product_Information row g-0 border py-5 px-3">
          <div className="col-4"></div>
          <div className="col-5 px-2 ps-4">
            <ProductInformationBox product={product[0]} />
          </div>
          <div className="col-3 px-3 pt-2">
            <ProductInformationPriceBox product={product[0]} />
          </div>
        </section>
        <section></section>
        <section></section>
      </article>
    )
  );
};

export default Product;
