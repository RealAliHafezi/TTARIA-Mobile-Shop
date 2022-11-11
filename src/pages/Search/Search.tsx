import React, { useState, useEffect } from "react";
import { ProductsType } from "../../assets/Types";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import PagesLayout from "../../sections/PagesLayout/PageLayout";
const Search = () => {
  const { SearchTxt } = useParams();
  const Products = useAppSelector((state) => state.Products.products);
  const [products, setProducts] = useState<Array<ProductsType> | ProductsType>(
    []
  );
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
  console.log(products);
  useEffect(() => {
    SearchTxt &&
      SearchTxt.length &&
      Products &&
      Products.length &&
      GetSearchingResult();
  }, [SearchTxt]);
  return;
  <PagesLayout></PagesLayout>;
};

export default Search;
