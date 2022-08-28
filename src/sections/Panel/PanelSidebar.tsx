import React from "react";
// style
import "../../styles/scss/panel/PanelSidebar.scss";
// img
import { MyLogo } from "../../assets/image/Images";
import { Link } from "react-router-dom";
// icons
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  MdOutlineSearch,
  TbDeviceMobile,
  TbDeviceWatch,
  BsSpeakerFill,
  MdInventory,
  FaSearchengin,
  GiSightDisabled,
  FaLayerGroup,
} from "./../../assets/icons/icons";
const PanelSidebar = () => {
  return (
    <React.Fragment>
      <section className="Panel_Sidebar position-fixed start-0 col-2 h-100">
        <div className="Panel_Sidebar_LogoBox w-75 mx-auto">
          <img src={MyLogo} alt="Logo" className="w-100" />
        </div>
        <ul className="Panel_Sidebar_List py-2 ps-0 ps-sm-1 ps-md-3">
          <li className="Panel_Sidebar_ListItem bg-dark text-center text-sm-end mb-2 pe-0 pe-sm-2 py-3 py-sm-2">
            <Link to={"/panel/search"} className="LINK text-light">
              <MdOutlineSearch className="fs-2 fs-sm-5 ms-0 ms-sm-1" />
              <span className="d-none d-sm-inline-block">جستجو</span>
            </Link>
          </li>
          <li className="Panel_Sidebar_ListItem text-center text-sm-end bg-dark mb-2 pe-0 pe-sm-2 py-3 py-sm-2">
            <Link to={"/panel/unavailable"} className="LINK text-light">
              <MdInventory className="fs-2 fs-sm-5 ms-0 ms-sm-1" />
              <span className="d-none d-sm-inline-block">ناموجود ها</span>
            </Link>
          </li>
          <li className="Panel_Sidebar_ListItem text-center text-sm-end bg-dark mb-2 pe-0 pe-sm-2 py-3 py-sm-2">
            <Link to={"/panel/disable"} className="LINK text-light">
              <GiSightDisabled className="fs-2 fs-sm-5 ms-0 ms-sm-1" />
              <span className="d-none d-sm-inline-block">غیرفعال ها</span>
            </Link>
          </li>
          <li className="Panel_Sidebar_ListItem text-center text-sm-end bg-dark mb-2 pe-0 pe-sm-2 py-3 py-sm-2">
            <Link to={"/panel/advanceSearch"} className="LINK text-light">
              <FaSearchengin className="fs-2 fs-sm-5 ms-0 ms-sm-1" />
              <span className="d-none d-sm-inline-block">پیشرفته</span>
            </Link>
          </li>
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
            <li className="Panel_Sidebar_ListItem text-center text-sm-end Panel_Sidebar_ListItem2 mb-1 pe-0 pe-sm-3 py-2 ">
              <Link to={"/panel/mobiles"} className="LINK text-light">
                <TbDeviceMobile className="fs-2 fs-sm-5 ms-0 ms-sm-1" />
                <span className="d-none d-sm-inline-block">موبایل ها</span>
              </Link>
            </li>
            <li className="Panel_Sidebar_ListItem text-center text-sm-end Panel_Sidebar_ListItem2 mb-1 pe-0 pe-sm-3 py-2 ">
              <Link to={"/panel/watches"} className="LINK text-light">
                <TbDeviceWatch className="fs-2 fs-sm-5 ms-0 ms-sm-1" />
                <span className="d-none d-sm-inline-block">ساعت ها</span>
              </Link>
            </li>
            <li className="Panel_Sidebar_ListItem text-center text-sm-end Panel_Sidebar_ListItem2 pe-0 pe-sm-3 py-2 ">
              <Link to={"/panel/speakers"} className="LINK text-light">
                <BsSpeakerFill className="fs-2 fs-sm-5 ms-0 ms-sm-1" />
                <span className="d-none d-sm-inline-block">اسپیکر ها</span>
              </Link>
            </li>
          </ul>
        </ul>
      </section>
    </React.Fragment>
  );
};

export default PanelSidebar;
