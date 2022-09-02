import React from "react";
// style
import "../../styles/scss/Panel/PanelSidebar.scss";
// img
import { MyLogo } from "../../assets/image/Images";
import { Link } from "react-router-dom";
// icons
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  FaLayerGroup,
} from "./../../assets/icons/icons";
// data
import { PanelSidebarItems } from "../../Data";
const PanelSidebar = () => {
  return (
    <React.Fragment>
      <section className="Panel_Sidebar position-fixed start-0 col-2 h-100 col-2">
        <div className="Panel_Sidebar_LogoBox w-75 mx-auto">
          <img src={MyLogo} alt="Logo" className="w-100" />
        </div>
        <ul className="Panel_Sidebar_List py-2 ps-0 ps-sm-1 ps-md-3">
          {PanelSidebarItems.BaseItems.map((item, index) => (
            <li
              key={index}
              className="Panel_Sidebar_ListItem bg-dark text-center text-sm-end mb-2 pe-0 pe-sm-2 py-3 py-sm-2 CURSOR"
            >
              <Link to={`/panel/${item.link}`} className="LINK text-light">
                {<item.icon className="fs-2 fs-sm-5 ms-0 ms-sm-1" />}
                <span className="d-none d-sm-inline-block">{item.txt}</span>
              </Link>
            </li>
          ))}
          <button
            className="Panel_Sidebar_ListItem bg-dark text-light text-center text-sm-end w-100 d-flex align-items-center pe-0 pe-sm-2 py-3 py-sm-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <span className="d-none d-sm-block">دسته بندی</span>
            <RiArrowDownSLine className="fs-5 me-1 d-none d-sm-block" />
            <FaLayerGroup className="fs-2 d-block d-sm-none mx-auto" />
          </button>
          <ul
            className="Panel_Sidebar_List Panel_Sidebar_List2 py-2 ps-0 ps-sm-2 collapse"
            id="collapseExample"
          >
            {PanelSidebarItems.GroupItems.map((item, index) => (
              <li
                key={index}
                className="Panel_Sidebar_ListItem text-center text-sm-end Panel_Sidebar_ListItem2 mb-1 pe-0 pe-sm-3 py-2 CURSOR"
              >
                <Link to={`/panel/${item.link}`} className="LINK text-light">
                  {<item.icon className="fs-2 fs-sm-5 ms-0 ms-sm-1" />}
                  <span className="d-none d-sm-inline-block">{item.txt}</span>
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      </section>
    </React.Fragment>
  );
};

export default PanelSidebar;
