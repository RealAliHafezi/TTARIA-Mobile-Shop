import React from "react";
import PanelSidebar from "./PanelSidebar";
// style
import "./../../styles/scss/panel/Panel.scss";
// type
interface propsType {
  children: JSX.Element;
}
const Panel = ({ children }: propsType) => {
  return (
    <article className="Panel row g-0">
      {children}
      <PanelSidebar />
    </article>
  );
};

export default Panel;