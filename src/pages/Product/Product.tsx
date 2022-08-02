import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
// components
import ProductInformationBox from "./../../components/Product/ProductInformationBox";
import ProductInformationPriceBox from "../../components/Product/ProductInformationPriceBox";
import ProductInformationGallery from "../../components/Product/ProductInformationGallery";
// style
import { ProductWrapper } from "../../styles/js/Product.style";
import "./../../styles/scss/product/Product.scss";
// type
import { ProductsType } from "./../../assets/Types";
import ProductInformationSendProduct from "../../components/Product/ProductInformationServices";

const Product = () => {
  const { Product } = useParams();
  const [product, setProduct] = useState<null | ProductsType[]>(null);
  const [resultVisibility, setResultVisibility] = useState<boolean>(false);
  //   all products
  const getAllProducts = useAppSelector((state) => state.Products.products);
  //
  const props = {
    resultVisibility: resultVisibility,
  };
  useEffect(() => {
    Product &&
      getAllProducts &&
      setProduct(getAllProducts.filter((pro) => pro.id === Product));
  }, [Product, getAllProducts]);
  return (
    product &&
    product.length > 0 && (
      <ProductWrapper className="Product px-3" {...props}>
        <section className="Product_Information row g-0 border pt-1 pb-0 pt-md-4 pt-lg-5 px-1 px-md-3 mb-5">
          <div className="Product_Information_Image_Result d-none d-md-block"></div>
          <div className="col-12 col-md-6 col-lg-4 Product_Information_Gallery py-1 px-0 px-sm-2 px-md-3 mb-3 mb-md-0">
            <ProductInformationGallery
              product={product[0]}
              resultVisibility={resultVisibility}
              setResultVisibility={setResultVisibility}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-5 px-2 ps-4 mb-3 mb-md-0">
            <ProductInformationBox product={product[0]} />
          </div>
          <div className="col-12 col-md-6 col-lg-3 px-3 pt-2 mx-md-auto">
            <ProductInformationPriceBox product={product[0]} />
          </div>
          <div className="Product_Information_Services w-100 row g-0 mt-5 px-2 py-4">
            <ProductInformationSendProduct />
          </div>
        </section>
        <section></section>
        <section></section>
      </ProductWrapper>
    )
  );
};

export default Product;
