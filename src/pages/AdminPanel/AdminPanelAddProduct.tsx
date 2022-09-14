// components
import PanelSidebar from "../../sections/Panel/PanelSidebar";
import PanelHeader from "../../components/Panel/PanelHeader";
import PanelAddProduct from "../../sections/Panel/PanelAddProduct";
const AdminPanelAddProduct = () => {
  return (
    <article className="Panel row g-0">
      <PanelHeader />
      <PanelAddProduct />
      <PanelSidebar />
    </article>
  );
};
export default AdminPanelAddProduct;
