import React, { useEffect } from "react";
// components
import PanelSidebar from "./../../sections/Panel/PanelSidebar";
import PanelHeader from "../../components/Panel/PanelHeader";
import PanelSearch from "../../sections/Panel/PanelSearch";
const AdminPanelSearch = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <article className="Panel row g-0">
      <PanelHeader />
      <PanelSearch />
      <PanelSidebar />
    </article>
  );
};

export default AdminPanelSearch;
