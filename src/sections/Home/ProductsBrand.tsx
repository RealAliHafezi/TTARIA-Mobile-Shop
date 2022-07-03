import React, { useEffect, useState } from "react";
// redux toolkit
import { useAppSelector } from "../../redux/hooks";
// style
import "./../../styles/scss/home/ProductsBrand/ProductsBrand.scss";
// components
import HomeProductsBrandSlider from "../../components/home/HomeProductsBrand/HomeProductsBrandSlider";
// types
import { ProductsType } from "./../../assets/Types";
interface PropsType {
  brand: "samsung" | "xiaomi" | "apple" | "Speaker" | "Watch";
  icon: any;
}
const ProductsBrand = ({ brand, icon }: PropsType) => {
  const [Products, setProducts] = useState<Array<ProductsType>>([]);
  // call data
  const AllData = useAppSelector((state) => state.Products.products);
  useEffect(() => {
    AllData.length > 0 &&
      setProducts(
        AllData.filter(
          (product) => product.brand === brand || product.productName === brand
        )
      );
  }, [AllData]);
  return (
    <section id="ProductsBrand" className="p-4 mt-3 border">
      <div className="Home_ProductsBrand_Lable d-flex align-items-center jsutify-content-center mb-5">
        <span className="Home_ProductsBrand_Lable_IconBox d-flex align-items-center justify-content-center rounded-circle ms-3">
          {icon}
        </span>
        <span className="Home_ProductsBrand_Lable_Title fw-bold">
          {Products.length > 0 &&
            Products[0].productName == "Mobile" &&
            "موبایل "}
          {Products.length > 0 &&
            Products[0].productName == "Speaker" &&
            "اسپیکر "}
          {Products.length > 0 && Products[0].productName == "Watch" && "ساعت "}
          {Products.length > 0 &&
            Products[0].productName == "Mobile" &&
            Products[0].brandFa}
        </span>
      </div>
      <div className="Home_ProductsBrand_Slider w-100 mt-3">
        <HomeProductsBrandSlider product={Products} />
      </div>
    </section>
  );
};

export default ProductsBrand;
