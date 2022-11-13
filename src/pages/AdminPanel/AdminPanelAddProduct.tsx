import { useEffect } from "react";
// components
import PanelSidebar from "../../sections/Panel/PanelSidebar";
import PanelHeader from "../../components/Panel/PanelHeader";
import PanelAddProduct from "../../sections/Panel/PanelAddProduct";
const AdminPanelAddProduct = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <article className="Panel row g-0">
      <PanelHeader />
      <PanelAddProduct />
      <PanelSidebar />
    </article>
  );
};
export default AdminPanelAddProduct;
