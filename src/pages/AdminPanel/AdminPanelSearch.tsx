import React from "react";
// components
import PanelSidebar from "./../../sections/Panel/PanelSidebar";
import PanelHeader from "../../components/Panel/PanelHeader";
import PanelSearch from "../../sections/Panel/PanelSearch";
const AdminPanelSearch = () => {
  return (
    <article className="Panel row g-0">
      <PanelHeader />
      <PanelSearch />
      <PanelSidebar />
    </article>
  );
};

export default AdminPanelSearch;
