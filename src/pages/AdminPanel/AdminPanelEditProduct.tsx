import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { FilteredProduct } from "../../redux/PanelEditProductSlice";
// components
import PanelSidebar from "../../sections/Panel/PanelSidebar";
import PanelHeader from "../../components/Panel/PanelHeader";
import PanelEditProduct from "../../sections/Panel/PanelEditProduct";

const AdminPanelEditProduct = () => {
  const { EditID } = useParams();
  const dispatch = useAppDispatch();
  const Data = useAppSelector((state) => state.Products.products);
  useEffect(() => {
    EditID &&
      Data.length &&
      dispatch(FilteredProduct({ ID: EditID, data: Data }));
  }, [EditID]);
  return (
    <article className="Panel row g-0">
      <PanelHeader />
      {EditID && <PanelEditProduct ID={EditID} />}
      <PanelSidebar />
    </article>
  );
};

export default AdminPanelEditProduct;
