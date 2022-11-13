import { useState, useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import React from "react";
// components
import PanelSidebar from "./../../sections/Panel/PanelSidebar";
import PanelHeader from "../../components/Panel/PanelHeader";
// type
import { ProductsType } from "../../assets/Types";
import PanelProducts from "./../../sections/Panel/PanelProducts";
const AdminPanelWatch = () => {
  const [Products, setProducts] = useState<[] | Array<ProductsType>>([]);
  const AllProducts = useAppSelector((state) => state.Products.products);
  useEffect(() => {
    AllProducts &&
      AllProducts.length > 0 &&
      setProducts(AllProducts.filter((prod) => prod.productName === "Watch"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <article className="Panel row g-0">
      <PanelHeader />
      <PanelProducts products={Products} />
      <PanelSidebar />
    </article>
  );
};
export default AdminPanelWatch;
