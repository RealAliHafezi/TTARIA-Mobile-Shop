import React from "react";
// style
import "./../../styles/scss/Panel/PanelHeader.scss";
// icon
import { MdOutlineSearch } from "./../../assets/icons/icons";
const PanelHeader = () => {
  return (
    <header className="Panel_Header py-4 bg-dark col-10">
      <div className="input-group w-50 mx-auto mb-3">
        <input
          type="text"
          className="form-control rounded-0"
          placeholder="Search Product 🔍"
        />
        <span className="input-group-text rounded-0 border-0 text-light">
          <MdOutlineSearch className="fs-3" />
        </span>
      </div>
    </header>
  );
};

export default PanelHeader;
